import { useLogout } from '@/hooks/auth/useLogout';
import { useContextAuth } from '@/hooks/useContextAuth';

export const useProfileViewModel = () => {
  const { logout } = useLogout();
  const { user } = useContextAuth();

  const handleLogout = async () => {
    await logout();
  };

  return { handleLogout, user };
};
