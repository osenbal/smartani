import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type AsyncImageProps = {
  classNameImg?: string;
  errorImageClassNames?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const AsyncImage: React.FC<AsyncImageProps> = ({
  classNameImg,
  errorImageClassNames,
  ...rest
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <picture className="relative">
      {imageError ? (
        <div
          className={twMerge(
            'bg-gray-300 h-[194px] w-full',
            errorImageClassNames
          )}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 2H22V12H20V4H4V13.586L9 8.586L14.414 14L13 15.414L9 11.414L4 16.414V20H12V22H2V2ZM15.547 7C15.2818 7 15.0274 7.10536 14.8399 7.29289C14.6524 7.48043 14.547 7.73478 14.547 8C14.547 8.26522 14.6524 8.51957 14.8399 8.70711C15.0274 8.89464 15.2818 9 15.547 9C15.8122 9 16.0666 8.89464 16.2541 8.70711C16.4416 8.51957 16.547 8.26522 16.547 8C16.547 7.73478 16.4416 7.48043 16.2541 7.29289C16.0666 7.10536 15.8122 7 15.547 7ZM12.547 8C12.547 7.20435 12.8631 6.44129 13.4257 5.87868C13.9883 5.31607 14.7514 5 15.547 5C16.3426 5 17.1057 5.31607 17.6683 5.87868C18.2309 6.44129 18.547 7.20435 18.547 8C18.547 8.79565 18.2309 9.55871 17.6683 10.1213C17.1057 10.6839 16.3426 11 15.547 11C14.7514 11 13.9883 10.6839 13.4257 10.1213C12.8631 9.55871 12.547 8.79565 12.547 8ZM16.172 14.757L19 17.586L21.828 14.757L23.243 16.172L20.414 19-L23.243 21.828L21.828 23.243L19 20.414L16.172 23.243L14.757 21.828L17.586 19L14.757 16.172L16.172 14.757Z"
                fill="#4F4F4F"
              />
            </svg>
            <p className="text-[#4a4a4a]">Image Error</p>
          </div>
        </div>
      ) : (
        <>
          {imageLoading && (
            <div className="animate-pulse bg-gray-300 h-[194px] w-full"></div>
          )}
          <img
            onLoadStart={() => setImageLoading(true)}
            onLoad={() => {
              setImageLoading(false);
              setImageError(false);
            }}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
            className={twMerge(
              `${imageLoading ? 'hidden' : 'block'}`,
              `h-[${imageLoading ? 0 : 100}%] w-[${
                imageLoading ? 0 : 100
              }%] min-w-full object-cover`,
              classNameImg
            )}
            {...rest}
          />
        </>
      )}
    </picture>
  );
};
export default AsyncImage;
