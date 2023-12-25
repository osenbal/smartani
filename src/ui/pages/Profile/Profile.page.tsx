import { Link } from 'react-router-dom';
import { useProfileViewModel } from './Profile.viewModel';

const ProfilePage = () => {
  const { handleLogout } = useProfileViewModel();

  return (
    <div>
      <div className="flex justify-center items-center bg-main-darkGreen py-[72px] rounded-b-2xl">
        <img
          className="w-1/2 h-1/2"
          src="/images/thumb/thumb_logo.png"
          alt="smartani"
        />
      </div>

      <div className="flex flex-row items-center gap-x-3 mt-[-70px] z-10 relative px-6">
        <img
          className="w-[130px] "
          src="/images/thumb/thumb_profile.png"
          alt="profile"
        />
        <div className="flex flex-col gap-y-2">
          <p className="text-white font-bold text-lg line-clamp-1">
            ROBERT FOX
          </p>
          <span className="text-appDarkGray font-medium ">rober@gmail.com</span>
        </div>
      </div>

      <div className="px-6 mt-[50px] flex flex-col gap-y-4">
        <Link
          to={'/kebun'}
          className="flex text-black hover:text-black/70 flex-row justify-between bg-white items-center py-3 px-6 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-200"
        >
          <p className="text-body2Regular">Kebun ku</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_20_790)">
              <path
                d="M16 8.66667V9.33334M16 8.66667C16 6.54494 16.8429 4.51011 18.3431 3.00982C19.8434 1.50953 21.8783 0.666672 24 0.666672H24.6667V9.33334C24.6667 11.6319 23.7536 13.8363 22.1283 15.4616C20.5029 17.0869 18.2985 18 16 18M16 8.66667C16 6.54494 15.1571 4.51011 13.6569 3.00982C12.1566 1.50953 10.1217 0.666672 8 0.666672H7.33333V9.33334C7.33333 11.6319 8.24643 13.8363 9.87174 15.4616C11.4971 17.0869 13.7015 18 16 18M16 18V30.6667M16 18V30M16 31.3333H10C7.87827 31.3333 5.84344 30.4905 4.34315 28.9902C2.84285 27.4899 2 25.4551 2 23.3333H8C10.1217 23.3333 12.1566 24.1762 13.6569 25.6765C15.1571 27.1768 16 29.2116 16 31.3333ZM16 31.3333H22C24.1217 31.3333 26.1566 30.4905 27.6569 28.9902C29.1571 27.4899 30 25.4551 30 23.3333H24C21.8783 23.3333 19.8434 24.1762 18.3431 25.6765C16.8429 27.1768 16 29.2116 16 31.3333Z"
                stroke="#034221"
                stroke-width="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_20_790">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>

        <button
          onClick={handleLogout}
          className="outline-none flex flex-row justify-between bg-white items-center py-3 px-6 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-200"
        >
          <p className="text-body2Regular">Logout</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H12"
              stroke="#FE0000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M9 12H20.5"
              stroke="#FE0000"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M17 8.5L20.5 12L17 15.5"
              stroke="#FE0000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
