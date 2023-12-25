import { IResponseApp, ResponseApp } from '@/data/ResponseApp';
import AuthRepository from '@/data/repository/auth.repository';
import { UserCredential } from 'firebase/auth';

export const useRegister = () => {
  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<IResponseApp<UserCredential>> => {
    if (!email || !password || !confirmPassword) {
      return ResponseApp.error(null, 'Please fill all fields');
    }

    if (password !== confirmPassword) {
      return ResponseApp.error(null, 'Password and confirm password not match');
    }

    const response =
      await AuthRepository.getInstance().registerWithEmailAndPassword(
        email,
        password
      );

    return response;
  };

  return { registerWithEmailAndPassword };
};
