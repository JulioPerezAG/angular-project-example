import { LoginScreenInterface } from './login-screen.interface';
import { UserInterface } from './user.interface';
import { TerrainScreenInterface } from './terrain-screen.interface';
import { PlantScreenInterface } from './plant-screen.interface';

export interface AppStateInterface {
  user: UserInterface;
  login: LoginScreenInterface;
  terrains: TerrainScreenInterface;
  plant: PlantScreenInterface;
}
