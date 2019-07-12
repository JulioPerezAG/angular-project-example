import { LoginScreenInterface } from './login-screen.interface';
import { UserInterface } from './user.interface';
import { TerrainScreenInterface } from './terrain-screen.interface';

export interface StateInterface {
  user: UserInterface;
  login: LoginScreenInterface;
  terrains: TerrainScreenInterface;
}
