import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EntranceComponent } from './entrance.component';
import { EntranceTableModule } from '../../components/entrance-table/entrance-table.module';

@NgModule({
  declarations: [
    EntranceComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: EntranceComponent}]),
    EntranceTableModule
  ],
  exports: [
    EntranceComponent
  ]
})
export class EntranceModule {
}
