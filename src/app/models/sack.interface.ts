import { CoordinatesInterface } from './coordinates.interface';

export interface SackInterface {
  coordinates: CoordinatesInterface;
  dateAplicated: string;
  id: string
  used: boolean;
  userId: string;
  inPlot:boolean;
}
