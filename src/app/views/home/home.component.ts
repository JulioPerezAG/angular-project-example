import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../models/app-state.interface';
import { signOut } from '../../actions/login.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent {

  constructor(private store: Store<AppStateInterface>) {
  }

  onSignOut() {
    this.store.dispatch(signOut());
  }
}
