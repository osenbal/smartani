import { NavLink } from 'react-router-dom';

const BottomNavigation = () => {
  const listMenu = [
    {
      menu: '/',
      iconActive: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M3.5 9.97817C3.5 9.36099 3.78495 8.77838 4.27212 8.39946L11.2721 2.95502C11.9943 2.39329 13.0057 2.39329 13.7279 2.95502L20.7279 8.39946C21.2151 8.77838 21.5 9.36099 21.5 9.97817V20C21.5 20.5304 21.2893 21.0391 20.9142 21.4142C20.5391 21.7893 20.0304 22 19.5 22H5.5C4.96957 22 4.46086 21.7893 4.08579 21.4142C3.71071 21.0391 3.5 20.5304 3.5 20V9.97817Z"
            stroke="#034221"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.31805 16C10.162 16.7501 11.3066 17.1716 12.5 17.1716C13.6935 17.1716 14.8381 16.7501 15.682 16"
            stroke="#034221"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconInactive: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M3.5 9.97817C3.5 9.36099 3.78495 8.77838 4.27212 8.39946L11.2721 2.95502C11.9943 2.39329 13.0057 2.39329 13.7279 2.95502L20.7279 8.39946C21.2151 8.77838 21.5 9.36099 21.5 9.97817V20C21.5 20.5304 21.2893 21.0391 20.9142 21.4142C20.5391 21.7893 20.0304 22 19.5 22H5.5C4.96957 22 4.46086 21.7893 4.08579 21.4142C3.71071 21.0391 3.5 20.5304 3.5 20V9.97817Z"
            stroke="#DADADA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.31805 16C10.162 16.7501 11.3066 17.1716 12.5 17.1716C13.6935 17.1716 14.8381 16.7501 15.682 16"
            stroke="#DADADA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      menu: '/notifications',
      iconActive: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_64_193)">
            <path
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.8432 5.09572 14.1792 4.2801 15.5046C3.79266 16.2966 3.54894 16.6927 3.63481 16.8463C3.72067 17 4.141 17 4.98167 17H19.0183C19.859 17 20.2793 17 20.3652 16.8463C20.4511 16.6927 20.2073 16.2966 19.7199 15.5046C18.9043 14.1792 18 11.8432 18 8Z"
              stroke="#034221"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="17"
              cy="4"
              r="5.5"
              fill="#034221"
              stroke="white"
              stroke-width="3"
            />
            <path
              d="M15 21C14.6951 21.4562 14.2575 21.8349 13.731 22.0982C13.2045 22.3614 12.6076 22.5 12 22.5C11.3924 22.5 10.7955 22.3614 10.269 22.0982C9.74247 21.8349 9.30487 21.4562 9 21"
              stroke="#034221"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_64_193">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      iconInactive: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_64_89)">
            <path
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.8432 5.09572 14.1792 4.2801 15.5046C3.79266 16.2966 3.54894 16.6927 3.63481 16.8463C3.72067 17 4.141 17 4.98167 17H19.0183C19.859 17 20.2793 17 20.3652 16.8463C20.4511 16.6927 20.2073 16.2966 19.7199 15.5046C18.9043 14.1792 18 11.8432 18 8Z"
              stroke="#DADADA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="17"
              cy="4"
              r="5.5"
              fill="#034221"
              stroke="white"
              stroke-width="3"
            />
            <path
              d="M15 21C14.6951 21.4562 14.2575 21.8349 13.731 22.0982C13.2045 22.3614 12.6076 22.5 12 22.5C11.3924 22.5 10.7955 22.3614 10.269 22.0982C9.74247 21.8349 9.30487 21.4562 9 21"
              stroke="#DADADA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_64_89">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      menu: '/profile',
      iconActive: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M20.5 21V19C20.5 17.9391 20.0786 16.9217 19.3284 16.1716C18.5783 15.4214 17.5609 15 16.5 15H8.5C7.43913 15 6.42172 15.4214 5.67157 16.1716C4.92143 16.9217 4.5 17.9391 4.5 19V21"
            stroke="#034221"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z"
            stroke="#034221"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconInactive: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M20.5 21V19C20.5 17.9391 20.0786 16.9217 19.3284 16.1716C18.5783 15.4214 17.5609 15 16.5 15H8.5C7.43913 15 6.42172 15.4214 5.67157 16.1716C4.92143 16.9217 4.5 17.9391 4.5 19V21"
            stroke="#DADADA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z"
            stroke="#DADADA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white py-6 px-[32px] sm:px[74px] w-full max-w-[480px] mx-auto flex flex-row gap-x-16 justify-between items-center">
      {listMenu.map((item) => (
        <NavLink
          to={`${item.menu}`}
          className="flex flex-col items-center transition-all duration-300"
        >
          {({ isActive }) => (
            <>{isActive ? item.iconActive : item.iconInactive}</>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavigation;
