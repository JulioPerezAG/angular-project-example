import { AllTerrainActions, TerrainActions } from '../actions/terrain.actions';
import { TerrainScreenInterface } from '../models/terrain-screen.interface';

export const terrainReducer = (state: TerrainScreenInterface = {
                                 isLoading: false,
                                 terrains: [],
                                 msg_error: ''
                               },
                               action: AllTerrainActions): TerrainScreenInterface => {
  switch (action.type) {
    case TerrainActions.LOAD_TERRAINS:
      return {
        ...state,
        isLoading: true
      };
    case TerrainActions.LOAD_TERRAINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        terrains: action.payload
      };
    case TerrainActions.LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        msg_error: action.payload
      };
    case TerrainActions.CLEAR_ALL:
      return {
        ...state,
        isLoading: false,
        terrains: []
      };
  }
};
