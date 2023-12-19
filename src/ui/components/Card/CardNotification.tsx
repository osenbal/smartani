import React from 'react';
import { Link } from 'react-router-dom';

type CardNotificationProps = {
  title: string;
  description: string;
  link: string;
};

const CardNotification: React.FC<CardNotificationProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <Link
      to={link}
      className="flex flex-row justify-between items-center bg-white p-4 rounded-md text-black overflow-hidden hover:text-black hover:bg-[#F6F9FE] transition-all duration-200"
    >
      <div className="flex flex-row justify-start gap-x-3 items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 3.6C3 3.44087 3.06321 3.28826 3.17574 3.17574C3.28826 3.06321 3.44087 3 3.6 3H20.4C20.5591 3 20.7117 3.06321 20.8243 3.17574C20.9368 3.28826 21 3.44087 21 3.6V17.4C21 17.4788 20.9845 17.5568 20.9543 17.6296C20.9242 17.7024 20.88 17.7685 20.8243 17.8243C20.7685 17.88 20.7024 17.9242 20.6296 17.9543C20.5568 17.9845 20.4788 18 20.4 18H16.26C16.1779 17.9999 16.0967 18.0166 16.0214 18.0491C15.9461 18.0816 15.8782 18.1292 15.822 18.189L12.437 21.786C12.3809 21.8456 12.3132 21.8931 12.238 21.9256C12.1629 21.9581 12.0819 21.9749 12 21.9749C11.9181 21.9749 11.8371 21.9581 11.762 21.9256C11.6868 21.8931 11.6191 21.8456 11.563 21.786L8.178 18.189C8.1218 18.1292 8.05393 18.0816 7.97859 18.0491C7.90325 18.0166 7.82205 17.9999 7.74 18H3.6C3.44087 18 3.28826 17.9368 3.17574 17.8243C3.06321 17.7117 3 17.5591 3 17.4V3.6Z"
            stroke="#DB5B23"
            stroke-width="1.5"
          />
          <path
            d="M12 7L13.425 9.575L16 11L13.425 12.425L12 15L10.575 12.425L8 11L10.575 9.575L12 7Z"
            stroke="#DB5B23"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="flex flex-col gap-y-[6px] flex-1 min-w-0">
          <p className="font-semibold line-clamp-1">{title}</p>
          <p className="text-appDarkGray line-clamp-2	hover:line-clamp-3 transition-all duration-300">
            {description}
          </p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 19L13.6 17.575L17.175 14H7.5C6.25 14 5.18767 13.5627 4.313 12.688C3.43833 11.8133 3.00067 10.7507 3 9.5C3 8.25 3.43767 7.18767 4.313 6.313C5.18833 5.43833 6.25067 5.00067 7.5 5H8V7H7.5C6.8 7 6.20833 7.24167 5.725 7.725C5.24167 8.20833 5 8.8 5 9.5C5 10.2 5.24167 10.7917 5.725 11.275C6.20833 11.7583 6.8 12 7.5 12H17.175L13.6 8.4L15 7L21 13L15 19Z"
          fill="#034221"
        />
      </svg>
    </Link>
  );
};

export default CardNotification;
