import AppButton from '@/ui/components/AppButton';
import AppInput from '@/ui/components/Form/AppInput';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="p-6">
      <div className="flex flex-row justify-between items-end mb-[42px]">
        <div className="w-1/2 max-w-[158px]">
          <h2 className="text-2xl font-semibold">Login to your account</h2>
          <div className="flex flex-row flex-nowrap gap-2 items-end mt-4">
            <div className="bg-main-darkGreen w-full h-[5px] rounded-full"></div>
            <div className="bg-main-darkGreen w-3 h-1 rounded-full"></div>
          </div>
        </div>
        <div>
          <img className="w-16	h-16" src="./smartani-logo.png" alt="smartani" />
        </div>
      </div>

      <div className="flex flex-col gap-y-7">
        <AppInput
          labelTop={<span>Email</span>}
          iconPlace="left"
          placeholder="Enter your email"
        />

        <AppInput
          labelTop={<span>Password</span>}
          iconPlace="right"
          icon={
            <div className="w-[20px] h-[17px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.1615 8.05311C13.1615 9.79911 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79911 6.8385 8.05311C6.8385 6.30611 8.2535 4.89111 9.9995 4.89111C11.7455 4.89111 13.1615 6.30611 13.1615 8.05311Z"
                  stroke="#DADADA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05292C17.289 3.48892 13.806 0.750916 9.998 0.750916H10.002C6.194 0.750916 2.711 3.48892 0.75 8.05292C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z"
                  stroke="#DADADA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          }
          placeholder="Enter your password"
        />
      </div>

      <div className="flex flex-row justify-end items-center mt-5 mb-12">
        <Link to="/auth/forgot-password">
          <span className="text-main-darkOrange">Forgot password?</span>
        </Link>
      </div>

      <AppButton
        colorType="primary"
        className="px-6 py-5 rounded-2xl w-full"
        onClick={() => {}}
      >
        <span>Login</span>
      </AppButton>

      <div className="flex flex-row justify-center items-center mt-[72px]">
        <span>
          Don't have account? {'  '}
          <Link to={'/register'} className="font-semibold text-main-darkOrange">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
