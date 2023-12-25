// create a middleware to check if the user is authenticated
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '@/context/Auth.context';
import { useContext } from 'react';

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
