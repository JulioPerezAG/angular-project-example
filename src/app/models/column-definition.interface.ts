export interface ColumnDefinitionInterface {
  displayedName: string;
  propertyName: string;
  columnTemplate?: (entity: any) => string;
}
