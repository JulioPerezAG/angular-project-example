import { EntityState } from '@ngrx/entity';

import { PlantTypeEnum } from './plant-type.enum';
import { PlantEntityType } from './plant-entity.type';

export interface PlantScreenInterface extends EntityState<PlantEntityType> {
  type: PlantTypeEnum;
  loading: boolean;
}
