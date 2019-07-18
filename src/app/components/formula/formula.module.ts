import { NgModule } from '@angular/core';
import { FormulaComponent } from './formula.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    FormulaComponent
  ],
  imports: [
    MatCardModule
  ],
  exports: [
    FormulaComponent
  ]
})
export class FormulaModule {
}
