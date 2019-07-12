import { Component, Input } from '@angular/core';

import { EntranceInterface } from '../../models/entrance.interface';

@Component({
  selector: 'app-entrance-table',
  templateUrl: './entrance-table.component.html'
})
export class EntranceTableComponent {

  @Input() data: EntranceInterface[] = [];

  displayedColumns = ['id', 'formula', 'orderId', 'date', 'operatorId'];
}
