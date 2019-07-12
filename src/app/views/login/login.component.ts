import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { signIn } from '../../actions/login.actions';
import { selectIsLoading, selectLoginErrors } from '../../selectors/login.selectors';

import { StateInterface } from '../../models/state.interface';
import { StoreValidators } from '../../validators/store.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  loadingIcon = faSpinner;

  loading: boolean;

  errors: Observable<string>;

  constructor(formBuilder: FormBuilder, private store: Store<StateInterface>) {
    this.form = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }, {
      asyncValidators: StoreValidators.hasStoreErrors(this.store.pipe(select(selectLoginErrors)), 'signInErrors')
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectIsLoading)).subscribe(isLoading => this.loading = isLoading);
    this.errors = this.store.pipe(select(selectLoginErrors));
    this.form.statusChanges.subscribe(() => console.log(this.form));
  }

  login() {
    this.store.dispatch(signIn(this.form.value));
  }

}
