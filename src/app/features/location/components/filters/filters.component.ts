import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FilterTypesInterface } from '../../models/filter-types.interface';
import { ControlConfigInterface } from '../../models/control-config.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: [
    './filters.component.scss'
  ]
})
export class FiltersComponent {

  @Input() set filterTypes(filterTypes: FilterTypesInterface[]) {
    this.form = this.formBuilder.group(filterTypes.reduce(FiltersComponent.reducer, {}));
    this.filters = filterTypes;
  }

  filters: FilterTypesInterface[] = [];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({});
  }

  static reducer(previousValue: ControlConfigInterface, currentValue: FilterTypesInterface) {
    return Object.assign(previousValue, {[currentValue.key]: currentValue.value});
  }

}
