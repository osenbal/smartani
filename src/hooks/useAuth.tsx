import { useState } from 'react';
import { firebaseAuth } from '@/data/firebaseApp';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!firebaseAuth.currentUser
  );

  return { isLoggedIn, setIsLoggedIn };
};
