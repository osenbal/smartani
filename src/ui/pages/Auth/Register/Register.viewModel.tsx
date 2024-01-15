import { useState } from 'react';
import { useRegister } from '@/hooks/auth/useRegister';
import { useNavigate } from 'react-router-dom';

const useRegisterViewModel = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { registerWithEmailAndPassword } = useRegister();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    registerWithEmailAndPassword(email, password, confirmPassword)
      .then((response) => {
        if (response.status === 200) {
          setIsSuccess(true);
        } else {
          setErrorText(response.message);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorText(error.message);
        setIsLoading(false);
      });
  };

  const navigateToHome = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log('navigate to home');
    navigate('/home');
  };

  return {
    handleRegister,
    showPassword,
    setShowPassword,
    errorText,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoadingRegister: isLoading,
    isSuccessRegister: isSuccess,
    navigateToHome,
  };
};

export default useRegisterViewModel;
