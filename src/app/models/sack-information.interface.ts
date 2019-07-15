export interface SackInformationInterface {
  parcela:string;
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
