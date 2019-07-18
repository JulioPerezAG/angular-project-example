import { EntityState } from '@ngrx/entity';

import { PlantEntityType } from './plant-entity.type';
import { PaginationInterface } from './pagination.interface';
import { PlantType } from './plant.type';
import { FormulaInterface } from './formula.interface';

export interface PlantScreenInterface extends EntityState<PlantEntityType> {
  plantType: PlantType;
  loading: boolean;
  pagination: PaginationInterface;
  formulas: FormulaInterface[];
}
