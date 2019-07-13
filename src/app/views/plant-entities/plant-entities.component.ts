import { Component } from '@angular/core';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plant-entities',
  templateUrl: './plant-entities.component.html'
})
export class PlantEntitiesComponent {
  constructor(private plantService: PlantService) {}


}
