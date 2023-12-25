import AuthRepository from '@/data/repository/auth.repository';

export const useLogout = () => {
  const logout = async () => {
    await AuthRepository.getInstance().logout();
  };

  return { logout };
};
