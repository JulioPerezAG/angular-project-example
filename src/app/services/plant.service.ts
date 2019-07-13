import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PlantEntityType } from '../models/plant-entity.type';
import { map } from 'rxjs/operators';
import { PlantType } from '../models/plant.type';

@Injectable()
export class PlantService {

  basePath: string;

  constructor(private httpClient: HttpClient) {
    this.basePath = `${environment.basePath}/ingenio`;
  }

  getPlant(type: PlantType, plantId: string, page = '0', pageSize = '10'): Observable<{ entities: PlantEntityType[], total: number }> {
    return this.httpClient.get<PlantEntityType[]>(`${this.basePath}/${type}/${plantId}`, {
      params: {page, pageSize},
      observe: 'response'
    }).pipe(map(response => ({entities: response.body, total: Number.parseFloat(response.headers.get('X-Total-Count'))})));
  }
}
