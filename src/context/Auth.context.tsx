import { createContext, useState, useEffect } from 'react';
import { firebaseAuth } from '@/data/firebaseApp';
import { User } from 'firebase/auth';
import { PuffLoader } from 'react-spinners';

interface AuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoading: boolean;
  user: User | null;
}

export const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isLoading: false,
  user: null,
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged();
    return () => unsubscribe;
  }, [firebaseAuth]);

  const onAuthStateChanged = () => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false);
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoading(false);
        setIsLoggedIn(false);
        setUser(null);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLoading, user }}
    >
      {!isLoading ? (
        children
      ) : (
        <div className="flex justify-center items-center h-screen">
          <PuffLoader color="#FFA45B" />
        </div>
      )}
    </AuthContext.Provider>
  );
};
