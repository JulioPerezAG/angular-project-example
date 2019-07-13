import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoordinatesInterface } from '../models/coordinates.interface';
import { TerrainInterface } from '../models/terrain.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  api = 'https://us-central1-sumagro-backend.cloudfunctions.net/app';

  constructor(private http: HttpClient) {
  }

  // Obtendra posiciones de los sacos
  getSacks(): Observable<CoordinatesInterface[]> {
    const pointsTest: CoordinatesInterface[] = [
      {
        latitude: 18.8502846,
        longitude: -97.0946065
      },
      {
        latitude: 18.8481067,
        longitude: -97.1047514
      },
      {
        latitude: 18.8547144,
        longitude: -97.10013
      }
    ];

    return Observable.create(observer => {
      observer.next(pointsTest);
    });
  }

  getTerrains(): Observable<TerrainInterface[]> {
    return this.http.get<TerrainInterface[]>(`${this.api}/sumagro-app/ingenios/parcelas`);
  }

  getIngenios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/sumagro-app/ingenios`);
  }

  // Renombrar a getPlant
  getIngenioByTypeAndId(type: string, idIngenio: string): Observable<any[]> {
    console.log(`Type: ${type} - ID: ${idIngenio}`);
    return this.http.get<any[]>(`${this.api}/sumagro-app/ingenio/${type}/${idIngenio}`);
  }

  getIngenioById(idIngenio: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${this.api}/sumagro-app/ingenio/${idIngenio}`).subscribe(data => {
        resolve(data);
      });
    });
  }

}
