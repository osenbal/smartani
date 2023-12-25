import AppButton from '@/ui/components/AppButton';
import AppInput from '@/ui/components/Form/AppInput';
import { Link } from 'react-router-dom';
import useRegisterViewModel from './Register.viewModel';

const RegisterPage = () => {
  const {
    handleRegister,
    showPassword,
    setShowPassword,
    errorText,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useRegisterViewModel();

  return (
    <div className="p-6">
      <div className="flex flex-row justify-between items-end mb-[42px]">
        <div className="w-1/2 max-w-[158px]">
          <h2 className="text-2xl font-semibold">Register account</h2>
          <div className="flex flex-row flex-nowrap gap-2 items-end mt-4">
            <div className="bg-main-darkGreen w-full h-[5px] rounded-full"></div>
            <div className="bg-main-darkGreen w-3 h-1 rounded-full"></div>
          </div>
        </div>
        <div>
          <img className="w-16	h-16" src="./smartani-logo.png" alt="smartani" />
        </div>
      </div>

      {errorText && (
        <div className="bg-red-500 text-white rounded-md p-2 my-4">
          {errorText}
        </div>
      )}
      <form onSubmit={handleRegister}>
        <div className="flex flex-col gap-y-7">
          <AppInput
            name="email"
            type="email"
            labelTop={<span>Email</span>}
            iconPlace="left"
            placeholder="Enter your email"
          />

          <AppInput
            name="password"
            autoComplete="new-password"
            labelTop={<span>Password</span>}
            iconPlace="right"
            type={showPassword ? 'text' : 'password'}
            icon={
              <div
                className="w-[20px] h-[17px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_93_349)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 9.00002C2.49963 8.63724 2.63074 8.28663 2.86905 8.01311C3.10736 7.73959 3.43673 7.5617 3.79614 7.5124C4.15555 7.46309 4.52065 7.54571 4.82381 7.74495C5.12698 7.94419 5.34767 8.24655 5.445 8.59602C7.392 15.098 16.603 15.099 18.554 8.60102C18.6088 8.41098 18.7007 8.23365 18.8243 8.07925C18.9479 7.92485 19.1009 7.79643 19.2743 7.70137C19.4478 7.60631 19.6383 7.5465 19.835 7.52537C20.0317 7.50424 20.2305 7.52221 20.4202 7.57825C20.6099 7.6343 20.7867 7.7273 20.9403 7.85191C21.0939 7.97653 21.2213 8.13029 21.3152 8.30435C21.4092 8.47841 21.4678 8.66933 21.4876 8.86612C21.5075 9.06292 21.4883 9.2617 21.431 9.45102C21.0892 10.6186 20.5394 11.7149 19.808 12.687L20.768 13.647C20.9112 13.7855 21.0254 13.951 21.1039 14.1341C21.1824 14.3171 21.2237 14.514 21.2254 14.7131C21.227 14.9123 21.189 15.1098 21.1134 15.2941C21.0379 15.4784 20.9265 15.6458 20.7856 15.7866C20.6447 15.9274 20.4771 16.0387 20.2928 16.114C20.1084 16.1894 19.9108 16.2272 19.7117 16.2254C19.5125 16.2236 19.3157 16.1821 19.1327 16.1034C18.9498 16.0247 18.7843 15.9103 18.646 15.767L17.636 14.757C17.111 15.1165 16.5516 15.423 15.966 15.672L16.209 16.578C16.3012 16.9586 16.2409 17.3601 16.041 17.6968C15.8411 18.0335 15.5175 18.2787 15.1393 18.3801C14.761 18.4814 14.3582 18.4308 14.0167 18.2391C13.6753 18.0473 13.4224 17.7297 13.312 17.354L13.061 16.419C12.356 16.492 11.644 16.492 10.939 16.419L10.689 17.354C10.5861 17.7383 10.3347 18.066 9.99024 18.265C9.64574 18.464 9.2363 18.5179 8.852 18.415C8.4677 18.3121 8.14002 18.0608 7.94105 17.7163C7.74207 17.3718 7.6881 16.9623 7.791 16.578L8.033 15.671C7.4478 15.4223 6.88873 15.1162 6.364 14.757L5.354 15.767C5.2157 15.9103 5.05023 16.0247 4.86727 16.1034C4.6843 16.1821 4.48749 16.2236 4.28832 16.2254C4.08915 16.2272 3.89162 16.1894 3.70724 16.114C3.52286 16.0387 3.35533 15.9274 3.21442 15.7866C3.07352 15.6458 2.96206 15.4784 2.88655 15.2941C2.81104 15.1098 2.773 14.9123 2.77463 14.7131C2.77627 14.514 2.81756 14.3171 2.89608 14.1341C2.97461 13.951 3.0888 13.7855 3.232 13.647L4.192 12.687C3.46226 11.7165 2.91349 10.6223 2.572 9.45702C2.52451 9.30933 2.50022 9.15516 2.5 9.00002Z"
                        fill="#DADADA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_93_349">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
            }
            placeholder="Enter your password"
          />
          <AppInput
            name="confirmPassword"
            autoComplete="new-password"
            labelTop={<span>Confirmation Password</span>}
            iconPlace="right"
            type={showConfirmPassword ? 'text' : 'password'}
            icon={
              <div
                className="w-[20px] h-[17px]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_93_349)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 9.00002C2.49963 8.63724 2.63074 8.28663 2.86905 8.01311C3.10736 7.73959 3.43673 7.5617 3.79614 7.5124C4.15555 7.46309 4.52065 7.54571 4.82381 7.74495C5.12698 7.94419 5.34767 8.24655 5.445 8.59602C7.392 15.098 16.603 15.099 18.554 8.60102C18.6088 8.41098 18.7007 8.23365 18.8243 8.07925C18.9479 7.92485 19.1009 7.79643 19.2743 7.70137C19.4478 7.60631 19.6383 7.5465 19.835 7.52537C20.0317 7.50424 20.2305 7.52221 20.4202 7.57825C20.6099 7.6343 20.7867 7.7273 20.9403 7.85191C21.0939 7.97653 21.2213 8.13029 21.3152 8.30435C21.4092 8.47841 21.4678 8.66933 21.4876 8.86612C21.5075 9.06292 21.4883 9.2617 21.431 9.45102C21.0892 10.6186 20.5394 11.7149 19.808 12.687L20.768 13.647C20.9112 13.7855 21.0254 13.951 21.1039 14.1341C21.1824 14.3171 21.2237 14.514 21.2254 14.7131C21.227 14.9123 21.189 15.1098 21.1134 15.2941C21.0379 15.4784 20.9265 15.6458 20.7856 15.7866C20.6447 15.9274 20.4771 16.0387 20.2928 16.114C20.1084 16.1894 19.9108 16.2272 19.7117 16.2254C19.5125 16.2236 19.3157 16.1821 19.1327 16.1034C18.9498 16.0247 18.7843 15.9103 18.646 15.767L17.636 14.757C17.111 15.1165 16.5516 15.423 15.966 15.672L16.209 16.578C16.3012 16.9586 16.2409 17.3601 16.041 17.6968C15.8411 18.0335 15.5175 18.2787 15.1393 18.3801C14.761 18.4814 14.3582 18.4308 14.0167 18.2391C13.6753 18.0473 13.4224 17.7297 13.312 17.354L13.061 16.419C12.356 16.492 11.644 16.492 10.939 16.419L10.689 17.354C10.5861 17.7383 10.3347 18.066 9.99024 18.265C9.64574 18.464 9.2363 18.5179 8.852 18.415C8.4677 18.3121 8.14002 18.0608 7.94105 17.7163C7.74207 17.3718 7.6881 16.9623 7.791 16.578L8.033 15.671C7.4478 15.4223 6.88873 15.1162 6.364 14.757L5.354 15.767C5.2157 15.9103 5.05023 16.0247 4.86727 16.1034C4.6843 16.1821 4.48749 16.2236 4.28832 16.2254C4.08915 16.2272 3.89162 16.1894 3.70724 16.114C3.52286 16.0387 3.35533 15.9274 3.21442 15.7866C3.07352 15.6458 2.96206 15.4784 2.88655 15.2941C2.81104 15.1098 2.773 14.9123 2.77463 14.7131C2.77627 14.514 2.81756 14.3171 2.89608 14.1341C2.97461 13.951 3.0888 13.7855 3.232 13.647L4.192 12.687C3.46226 11.7165 2.91349 10.6223 2.572 9.45702C2.52451 9.30933 2.50022 9.15516 2.5 9.00002Z"
                        fill="#DADADA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_93_349">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
            }
            placeholder="Enter confirmation password"
          />
        </div>

        <AppButton
          colorType="primary"
          type="submit"
          className="px-6 py-5 rounded-2xl w-full mt-12"
        >
          <span>Register</span>
        </AppButton>
      </form>

      <div className="flex flex-row justify-center items-center mt-[72px]">
        <span>
          Have account? {'  '}
          <Link to={'/login'} className="font-semibold text-main-darkOrange">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
