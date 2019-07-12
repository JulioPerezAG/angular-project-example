export interface SackInformationInterface {
  longitude: number;
  latitude: number;
  colorStatus: string;
  totalSacks: number;
  totalSacksDelivered: number;
  ingenioId: string;
  ingenioName: string;
  sacks: any[];
  sacksIncomplete: any[];
}
