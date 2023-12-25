import { createContext, useState, useEffect } from 'react';
import { firebaseAuth } from '@/data/firebaseApp';

interface AuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isLoading: false,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!firebaseAuth.currentUser
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged();
    return () => unsubscribe;
  }, [firebaseAuth]);

  const onAuthStateChanged = () => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false);
        setIsLoggedIn(true);
      } else {
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
