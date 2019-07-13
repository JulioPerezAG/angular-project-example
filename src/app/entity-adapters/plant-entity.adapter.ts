import { createEntityAdapter } from '@ngrx/entity';
import { PlantEntityType } from '../models/plant-entity.type';

export const plantEntityAdapter = createEntityAdapter<PlantEntityType>({
  selectId: model => model.id
});
