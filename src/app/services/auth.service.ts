import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { auth } from 'firebase/app';

export interface IUser {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<IUser>;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) {
    this.user = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fireStore.doc<IUser>('users/' + user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.fireAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user).then(() => {
      return this.router.navigate(['/admin']);
    });
  }

  async signOut() {
    return this.fireAuth.auth.signOut().then(() => {
      return this.router.navigate(['/']);
    });
  }

  private updateUserData({ uid, email, displayName, photoURL }: IUser) {
    const userRef: AngularFirestoreDocument<IUser> = this.fireStore.doc(
      'users/' + uid
    );
    const data = {
      uid,
      email,
      displayName,
      photoURL
    };
    return userRef.set(data, { merge: true });
  }
}
