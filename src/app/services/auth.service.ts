import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { concat, from, Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from '../../environments/environment';

import { UserInterface } from '../models/user.interface';
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
    concat(from(this.auth.signInWithEmailAndPassword(email, password)).pipe(map(userCredential => ({uid: userCredential.user.uid}))),
      from(this.auth.currentUser.getIdToken()).pipe(map(token => ({token})))).pipe(toArray(), map(([uid, token]) => ({...uid, ...token})));
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(map(user => {
      console.log('User', user);
      return user;
    }), map(userCredential => ({uid: userCredential.user.uid, token: ''})));
  }

  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

  getUserData(uid: string) {
    this.httpClient.get(`${this.basePath}/${uid}`);
  }
}
