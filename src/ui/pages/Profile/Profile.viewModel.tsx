import { useLogout } from '@/hooks/auth/useLogout';

export const useProfileViewModel = () => {
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return { handleLogout };
};
