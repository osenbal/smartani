import AuthRepository from '@/data/repository/auth.repository';
import { useContextAuth } from '../useContextAuth';
import { IResponseApp, ResponseApp } from '@/data/ResponseApp';
import { UserCredential } from 'firebase/auth';

export const useLogin = () => {
  const { login } = useContextAuth();

  const loginWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<IResponseApp<UserCredential>> => {
    if (!email || !password) {
      return ResponseApp.error(null, 'Please fill all fields');
    }

    const response =
      await AuthRepository.getInstance().loginWithEmailAndPassword(
        email,
        password
      );
    const data = response.data;

    if (response.status === 200 && data) {
      login();
    }

    return response;
  };

  return { loginWithEmailAndPassword };
};
