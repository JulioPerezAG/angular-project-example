import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PlantType } from '../../models/plant.type';
import { ColumnDefinitionInterface } from '../../models/column-definition.interface';
import { PaginationInterface } from '../../models/pagination.interface';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-plant-entity-table',
  templateUrl: './plant-entity-table.component.html'
})
export class PlantEntityTableComponent {

  @Input() data: any[] = [];

  @Input() set plantType(plantType: PlantType) {
    this.displayedColumns = this.columnsDefinition[plantType].map(value => value.propertyName);
    this.currentColumnDefinition = this.columnsDefinition[plantType];
  }

  @Input() pagination: PaginationInterface;

  @Output() pageChange: EventEmitter<PageEvent>;

  displayedColumns: string[] = [];

  currentColumnDefinition: ColumnDefinitionInterface[];

  entranceColumnDefinition: ColumnDefinitionInterface[] = [
    {displayedName: 'Id', propertyName: 'id'},
    {displayedName: 'Formula', propertyName: 'description'},
    {displayedName: 'Order Id', propertyName: 'orderId'},
    {
      displayedName: 'Fecha', propertyName: 'date', columnTemplate: date =>
        new Date(date).toISOString().split('T')[0]
    },
    {displayedName: 'Operator Id', propertyName: 'operator'}
  ];

  outputColumnDefinition: ColumnDefinitionInterface[] = [
    {displayedName: 'Id', propertyName: 'id'},
    {displayedName: 'Formula', propertyName: 'description'},
    {displayedName: 'User Id', propertyName: 'userId'}
  ];

  aplicatedColumnDefinition: ColumnDefinitionInterface[] = [
    {displayedName: 'Id', propertyName: 'id'},
    {displayedName: 'Formula', propertyName: 'description'},
    {displayedName: 'Fecha', propertyName: 'dateAplicated'},
    {displayedName: 'User Id', propertyName: 'userId'}
  ];

  inventoryColumnDefinition: ColumnDefinitionInterface[] = [
    {displayedName: 'Id', propertyName: 'id'},
    {displayedName: 'Formula', propertyName: 'description'}
  ];

  intransitColumnDefiniton: ColumnDefinitionInterface[] = [
    {displayedName: 'Id', propertyName: 'id'},
    {displayedName: 'Formula', propertyName: 'description'},
    {displayedName: 'Ingenio Id', propertyName: 'ingenioId'},
    {displayedName: 'Unidad Operativa', propertyName: 'operationUnit'},
    {displayedName: 'Operador', propertyName: 'operator'},
    {displayedName: 'Order Id', propertyName: 'orderId'},
    {displayedName: 'Placas', propertyName: 'plates'}
  ];

  columnsDefinition = {
    entrance: this.entranceColumnDefinition,
    outputs: this.outputColumnDefinition,
    aplicated: this.aplicatedColumnDefinition,
    inventory: this.inventoryColumnDefinition,
    intransit: this.intransitColumnDefiniton
  };

  constructor() {
    this.pageChange = new EventEmitter();
  }

  onPageChange(change: PageEvent) {
    this.pageChange.emit(change);
  }
}
