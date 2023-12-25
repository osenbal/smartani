import { useContext } from 'react';
import { AuthContext } from '@/context/Auth.context';

export const useContextAuth = () => {
  const { isLoggedIn, setIsLoggedIn, user } = useContext(AuthContext);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return { isLoggedIn, login, logout, user };
};
