import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from '../../environments/environment';

import { UserInterface } from '../models/user.interface';
import { map } from 'rxjs/operators';
import Auth = firebase.auth.Auth;

@Injectable()
export class AuthService {

  auth: Auth;

  basePath: string;

  constructor(private httpClient: HttpClient) {
    firebase.initializeApp({
      apiKey: 'AIzaSyD5DCPHsQRgQExi3730nnMsh6f9eq6938c',
      authDomain: 'sumagro-backend.firebaseapp.com'
    });
    this.auth = firebase.auth();

    this.basePath = `${environment.basePath}/user`;
  }

  signIn(email, password): Observable<UserInterface> {
    return from(this.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => Promise.all([Promise.resolve(userCredential.user.uid), userCredential.user.getIdToken()])))
      .pipe(map(([uid, token]) => ({uid, token})));
  }

  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

  getUserData(uid: string): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(`${this.basePath}/${uid}`);
  }
}
