import { IResponseApp } from '@/data/ResponseApp';
import { UserCredential } from 'firebase/auth';

export interface IAuthRepository {
  loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<IResponseApp<UserCredential>>;

  registerWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<IResponseApp<UserCredential>>;

  logout(): Promise<IResponseApp<void>>;
}
