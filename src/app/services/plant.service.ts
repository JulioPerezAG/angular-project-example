import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PlantTypeEnum } from '../models/plant-type.enum';
import { Observable } from 'rxjs';

@Injectable()
export class PlantService {

  basePath: string;

  constructor(private httpClient: HttpClient) {
    this.basePath = `${environment.basePath}/ingenio`;
  }

  getPlant<T>(type: PlantTypeEnum, plantId: string): Observable<T> {
    return this.httpClient.get<T>(`${this.basePath}/${type}/${plantId}`);
  }
}
