import { IAuthRepository } from '@/contracts/repository/IAuth.repository';
import {
  signInWithFirebase,
  registerWithFirebase,
  signOutWithFirebase,
} from '../firebaseApp';
import { IResponseApp } from '../ResponseApp';
import { UserCredential } from 'firebase/auth';
import { ResponseApp } from '../ResponseApp';
import { FirebaseError } from 'firebase/app';

export default class AuthRepository implements IAuthRepository {
  private static instance: AuthRepository;
  private constructor() {}
  static getInstance(): AuthRepository {
    if (!AuthRepository.instance) {
      AuthRepository.instance = new AuthRepository();
    }
    return AuthRepository.instance;
  }

  async logout(): Promise<IResponseApp<void>> {
    try {
      signOutWithFirebase();
      return ResponseApp.success(undefined, 'Logout success');
    } catch (err: any) {
      console.error(err);
      return ResponseApp.error(err, 'Logout failed');
    }
  }

  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<IResponseApp<UserCredential>> {
    try {
      const res = await signInWithFirebase(email, password);
      return ResponseApp.success(res, 'Login success');
    } catch (err: any) {
      console.error(err);

      switch (err.code) {
        case 'auth/invalid-email':
          return ResponseApp.error(err, 'Invalid email');
        case 'auth/user-disabled':
          return ResponseApp.error(err, 'User disabled');
        case 'auth/user-not-found':
          return ResponseApp.error(err, 'User not found');
        case 'auth/wrong-password':
          return ResponseApp.error(err, 'Wrong password');
        case 'auth/too-many-requests':
          return ResponseApp.error(err, 'Too many requests');
        case 'auth/operation-not-allowed':
          return ResponseApp.error(err, 'Operation not allowed');
        case 'auth/invalid-credential':
          return ResponseApp.error(err, 'Invalid credential');
        case 'auth/account-exists-with-different-credential':
          return ResponseApp.error(
            err,
            'Account exists with different credential'
          );
        default:
      }

      if (err instanceof FirebaseError) {
        return ResponseApp.error(err, 'Firebase Error : Register failed');
      }

      return ResponseApp.error(err, 'Login failed');
    }
  }

  async registerWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<IResponseApp<UserCredential>> {
    try {
      const res = await registerWithFirebase(email, password);
      return ResponseApp.success(res, 'Register success');
    } catch (err: any) {
      console.error(err);

      switch (err.code) {
        case 'auth/email-already-in-use':
          return ResponseApp.error(err, 'Email already in use');
        case 'auth/invalid-email':
          return ResponseApp.error(err, 'Invalid email');
        case 'auth/weak-password':
          return ResponseApp.error(err, 'Weak password');

        default:
      }

      if (err instanceof FirebaseError) {
        return ResponseApp.error(err, 'Firebase Error : Register failed');
      }

      return ResponseApp.error(err, 'Register failed');
    }
  }
}
