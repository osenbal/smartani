import { useState } from 'react';
import { useRegister } from '@/hooks/auth/useRegister';
import { useNavigate } from 'react-router-dom';

const useRegisterViewModel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorText, setErrorText] = useState('');
  const { registerWithEmailAndPassword } = useRegister();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    registerWithEmailAndPassword(email, password, confirmPassword).then(
      (response) => {
        if (response.status === 200) {
          console.log(response);
          navigate('/');
        } else {
          setErrorText(response.message);
        }
      }
    );
  };

  return {
    handleRegister,
    showPassword,
    setShowPassword,
    errorText,
    showConfirmPassword,
    setShowConfirmPassword,
  };
};

export default useRegisterViewModel;
