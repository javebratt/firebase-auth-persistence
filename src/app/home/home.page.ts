import { Component } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private readonly auth: Auth) {}

  async login(email: string, password: string): Promise<UserCredential> {
    await setPersistence(this.auth, browserLocalPersistence);
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async signup(email: string, password: string): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    await sendEmailVerification(userCredential.user);
    return userCredential;
  }
}
