import { AbstractControl, ValidationErrors } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class StoreValidators {

  static hasStoreErrors<T>(error: Observable<T>, errorName: string) {
    return (_: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>
      error.pipe(map(errors => (!!errors ? {[errorName]: true} : null)));
  }
}
