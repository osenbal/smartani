import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@/hooks/auth/useLogin';

export const useLoginViewModel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState('');

  const { loginWithEmailAndPassword } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password).then((response) => {
      if (response.status === 200) {
        navigate('/');
      } else {
        console.log(response);
        setErrorText(response.message);
      }
    });
  };

  return { handleLogin, showPassword, setShowPassword, errorText };
};
