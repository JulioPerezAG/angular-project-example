import { CoordinatesInterface } from './coordinates.interface';

export interface AplicatedInterface {
  coordenates: CoordinatesInterface;
  dateAplicated: string;
  description: string;
  id: string;
  used: boolean;
  userId: string;
}
