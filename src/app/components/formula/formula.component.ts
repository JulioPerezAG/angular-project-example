import { Component, Input } from '@angular/core';

import { FormulaInterface } from '../../models/formula.interface';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html'
})
export class FormulaComponent {

  @Input() formula: FormulaInterface;
}
