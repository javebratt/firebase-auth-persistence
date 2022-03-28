import { Component } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  UserCredential,
} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private readonly auth: Auth) {}

  login(email: string, password: string): Promise<UserCredential> {
    return setPersistence(this.auth, browserLocalPersistence).then(() =>
      signInWithEmailAndPassword(this.auth, email, password)
    );
  }
}
