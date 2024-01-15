import { firebaseConfig } from '@/config/firebase.config';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, update } from 'firebase/database';

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const signInWithFirebase = (email: string, password: string) =>
  signInWithEmailAndPassword(firebaseAuth, email, password);
export const firebaseDatabase = getDatabase(firebaseApp);
export const dbRefMoisture = (uid: string) =>
  ref(firebaseDatabase, `UsersData/${uid}/data/moisture`);
export const dbRefUserSuggestion = (uid: string) =>
  ref(firebaseDatabase, `UsersData/${uid}/data/sugestion`);
export const dbRefWatering = (uid: string) =>
  ref(firebaseDatabase, `UsersData/${uid}/data/action`);
export const updateWatering = (uid: string, value: boolean) =>
  update(ref(firebaseDatabase, `UsersData/${uid}/data`), {
    action: value,
  });
export const registerWithFirebase = (email: string, password: string) =>
  createUserWithEmailAndPassword(firebaseAuth, email, password);
export const signOutWithFirebase = () => signOut(firebaseAuth);
