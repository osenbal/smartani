import { UserCredential } from 'firebase/auth';

export interface IUser {
  id: string;
  name: string | null;
  email: string | null;
  photoUrl: string | null;
}

// UserCredential to User model
export const userCredentialToUserModel = (user: UserCredential): IUser => {
  return {
    id: user.user.uid,
    name: user.user.displayName,
    email: user.user.email,
    photoUrl: user.user.photoURL,
  };
};
