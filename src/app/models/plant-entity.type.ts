import { OutputInterface } from './output.interface';
import { EntranceInterface } from './entrance.interface';
import { InTransitInterface } from './in-transit.interface';
import { AplicatedInterface } from './aplicated.interface';
import { InventoryInterface } from './inventory.interface';

export type PlantEntityType = OutputInterface | EntranceInterface | InTransitInterface | AplicatedInterface | InventoryInterface;
