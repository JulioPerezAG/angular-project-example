import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TerrainInterface } from '../../models/terrain.interface';
import { SackInterface } from '../../models/sack.interface';
import { SackInformationInterface } from '../../models/sack-information.interface';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { MapService } from '../../services/map.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { LoadTerrains } from '../../actions/terrain.actions';
import { getTerrains } from '../../selectors/terrains.selector';
import { AppStateInterface } from '../../models/app-state.interface';
import { selectUserPlantId } from 'src/app/selectors/user.selectors';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    './map.component.scss'
  ]
})
export class MapComponent implements OnInit {

  constructor(private store: Store<AppStateInterface>, private mapService: MapService,
              private authService: AuthService) {
  }

  // Opciones de filtrado
  filterTypes: any[] = ['Completos', 'Incompletos'];

  @ViewChild('modalInfoMarker', {static: false}) private swalModalInfoMarker: SwalComponent;

  listIngenios: any[];

  // Coordenadas para posicionar el mapa
  lat = 18.8502846;
  lng = -97.0946065;

  // Observable que recibe toda la informacion del selector
  pointsTerrains$: Observable<TerrainInterface[]>;

  // Arreglos para mantener los datos obtenidos
  pointsTerrains: TerrainInterface[]; // Mantiene los objetos de terrenos/parcelas

  pointsSacks: SackInterface[]; // Mantiene los objetos de los costales

  infoSacks: SackInformationInterface[] = []; // Arreglo para mantener informacion (objetos) que iterara la vista

  infoSacksCopy: SackInformationInterface[] = []; // Copia de arreglo final

  completedSacks: SackInformationInterface[] = []; // Almacena los costales activos/completados

  incompletedSacks: SackInformationInterface[] = [];  // Almacena los costales Inactivos/incompletos

  loading: boolean;

  idIngenio: string;

  activeBtnFilter = false;


  // Objetos con informacion de los marcadores para el mapa
colores ={
  // Completados
  iconGreen:{
    url: '../../../assets/images/MapGreen.png',
    scaledSize: {width: 25, height: 30}
  },

  // Incompletos
  iconRed :{
    url: '../../../assets/images/MapRed.png',
    scaledSize: {width: 25, height: 30}
  },

  iconBlue : {
    url: '../../../assets/images/MapBlue.png',
    scaledSize: {width: 25, height: 30}
  }
}
  infoClick: SackInformationInterface;

  ngOnInit() {
    /**
     * Al iniciar el componente dispara una accion para cargar los datos del servicio
     * a un almacenamiento local
     */

    this.store.select(selectUserPlantId).subscribe(async (data)=> {
      await this.store.dispatch(new LoadTerrains(data));
    })

    this.store.select(getTerrains).subscribe(data => {
      // debugger;

      if (data.length != 0) {
        console.log("getTerrenos: ",data)
        this.loading = false;
        // console.log("Terrenos: ", data);
        // Se genera un objeto bajo un modelo especifico que ayudara en la iteracion y muestreo de info en la vista
        this.pointsTerrains = data

        // Se mapea objeto por objeto del arreglo general de parcelas/terrenos
        this.pointsTerrains.map(terrain => {
          let objeto: SackInformationInterface =
          { parcela: '',
            latitude: 0,
            longitude: 0,
            colorStatus: '',
            totalSacks: 0,
            totalSacksDelivered: 0,
            ingenioId: '',
            ingenioName: '',
            sacks: [],
            sacksIncomplete: []
          }
          //console.log("Terreno: ",terrain.latidud);
          objeto.latitude = parseFloat(terrain.latitud);
          objeto.longitude = parseFloat(terrain.longitud);
          objeto.ingenioId = terrain.ingenioId;
          objeto.parcela = terrain.clave;
          objeto.ingenioName = terrain.ingenioName;
          //
          let sacks: SackInterface[];
          //Conversion del objeto de objetos a un arreglo para mejor manipulacion
          if (terrain.sacks != undefined) {
            sacks = Object.keys(terrain.sacks).map(key => terrain.sacks[key]);
          } else {
            sacks = [];
          }
          // Se obtinen costales completados
          // let completed: any[] = sacks.map(sack => { if(sack.used == true){ return sack }});
          let completed: any = [];
          let incompleted: any = [];
          let aplicatedInPlot:boolean = true;
          sacks.forEach(sack => {
            if (sack.used) {
              completed.push(sack);
              if(sack.inPlot==false){
                aplicatedInPlot = false;
              }
            } else {
              incompleted.push(sack);
            }
          })
          // Comparacion de totales para saber la diferencia
          if (sacks.length === completed.length && aplicatedInPlot) {
            
            objeto.colorStatus = 'Green';

            objeto.totalSacks = sacks.length;
            objeto.totalSacksDelivered = completed.length;
          } else if(sacks.length === completed.length && !aplicatedInPlot){
            objeto.colorStatus = 'Blue';

            objeto.totalSacks = sacks.length;
            objeto.totalSacksDelivered = completed.length;
          }else {
            objeto.colorStatus = 'Red';
          }
          objeto.sacks = completed;
          objeto.sacksIncomplete = incompleted;
          // Guardado de objeto a arreglo de informacion adicional para muestreo en vista
          this.infoSacks.push(objeto);
        });
        this.infoSacksCopy = this.infoSacks;
      }
      else {
        this.loading = true;
      }
    });

  }

  /**
   *
   * @param infoWindow referencia hacia el contenedor de informacion (tooltip) en la vista
   * @param $event Evento para detectar que esta encima del elemento
   */
  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
  }

  /**
   *
   * @param infoWindow referencia hacia el contenedor de informacion (tooltip) en la vista
   * @param $event Evento para detectar que esta fuera del elemento
   */
  onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
  }

  /**
   *
   * @param filter Detecta que checkbox activo el usuario y enviar la informacion correspondiente
   * @param evt Detecta evento de marcado/checked
   */
  changeValue(filter: string, evt): void {
    if (evt.checked && filter === 'Completos') {
      this.completedSacks = this.infoSacksCopy.filter(c => c.colorStatus === 'Green' || c.colorStatus == 'Blue');
    } else {
      if (evt.checked && filter === 'Incompletos') {
        this.incompletedSacks = this.infoSacksCopy.filter(c => c.colorStatus === 'Red');
      } else {
        if (filter === 'Completos') {
          this.completedSacks = [];
        } else {
          this.incompletedSacks = [];
        }
      }
    }
  }

  selectDropdown(idIngenio: string): void {
    this.idIngenio = idIngenio;
    this.activeBtnFilter = true;
  }

  onFilterByIngenio() {
    this.infoSacksCopy = this.infoSacksCopy.filter(sack => {
      if (sack.ingenioId === this.idIngenio ) { // borrar la ultima parte del || ya que solo es prueba
        return sack;
      }
    });
  }

  onAllTerrains() {
    this.activeBtnFilter = false;
    this.infoSacksCopy = this.infoSacks;
  }

  markerClick(data: SackInformationInterface) {
    this.infoClick = data;
    this.swalModalInfoMarker.show();
  }
}
