import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@/hooks/auth/useLogin';

export const useLoginViewModel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { loginWithEmailAndPassword } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.status === 200) {
          navigate('/home');
        } else {
          console.log(response);
          setErrorText(response.message);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setErrorText(error.message);
        setIsLoading(false);
      });
  };

  return {
    handleLogin,
    showPassword,
    setShowPassword,
    errorText,
    isLoadingLogin: isLoading,
  };
};
