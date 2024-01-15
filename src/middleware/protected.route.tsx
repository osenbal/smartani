// create a middleware to check if the user is authenticated
import { Outlet, Navigate } from 'react-router-dom';
import { useContextAuth } from '@/hooks/useContextAuth';

const ProtectedRoute = () => {
  const { isLoggedIn } = useContextAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
