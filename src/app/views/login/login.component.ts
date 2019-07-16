import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

import { select, Store } from '@ngrx/store';

import { signIn } from '../../actions/login.actions';
import { selectIsLoading, selectLoginErrors } from '../../selectors/login.selectors';

import { AppStateInterface } from '../../models/app-state.interface';
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

  constructor(formBuilder: FormBuilder, private store: Store<AppStateInterface>) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }, {
      asyncValidators: [StoreValidators.hasStoreErrors(this.store.pipe(select(selectLoginErrors)), 'signInErrors')]
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectIsLoading)).subscribe(isLoading => this.loading = isLoading);
  }

  login() {
    this.store.dispatch(signIn(this.form.value));
  }

}
