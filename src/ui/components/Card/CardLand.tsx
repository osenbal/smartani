import React from 'react';
import { Link } from 'react-router-dom';
import AsyncImage from '../AsyncImage';

type CardLandProps = {
  suggestion: string;
  landName: string;
  landSize: string;
  landImage: string;
  landId: number;
  isFlush: boolean;
  onFlush?: () => void;
};

const CardLand: React.FC<CardLandProps> = ({
  suggestion,
  landName,
  landSize,
  landImage,
  landId,
  isFlush,
  onFlush,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-md">
      <div className="relative">
        <AsyncImage src={landImage} classNameImg="rounded-md h-[194px]" />

        <div className="flex flex-row items-center gap-x-2 absolute bottom-0 bg-[#EBEBEB] p-2 rounded-tr-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2 2.4C2 2.29391 2.04214 2.19217 2.11716 2.11716C2.19217 2.04214 2.29391 2 2.4 2H13.6C13.7061 2 13.8078 2.04214 13.8828 2.11716C13.9579 2.19217 14 2.29391 14 2.4V11.6C14 11.6525 13.9897 11.7045 13.9696 11.7531C13.9495 11.8016 13.92 11.8457 13.8828 11.8828C13.8457 11.92 13.8016 11.9495 13.7531 11.9696C13.7045 11.9897 13.6525 12 13.6 12H10.84C10.7853 11.9999 10.7312 12.0111 10.6809 12.0327C10.6307 12.0544 10.5855 12.0861 10.548 12.126L8.29133 14.524C8.25393 14.5638 8.20879 14.5954 8.15869 14.6171C8.10859 14.6387 8.05458 14.6499 8 14.6499C7.94542 14.6499 7.89141 14.6387 7.84131 14.6171C7.79121 14.5954 7.74607 14.5638 7.70867 14.524L5.452 12.126C5.41453 12.0861 5.36928 12.0544 5.31906 12.0327C5.26884 12.0111 5.2147 11.9999 5.16 12H2.4C2.29391 12 2.19217 11.9579 2.11716 11.8828C2.04214 11.8078 2 11.7061 2 11.6V2.4Z"
              stroke="#DB5B23"
              strokeWidth="1.5"
            />
            <path
              d="M7.99999 4.66667L8.95 6.38334L10.6667 7.33334L8.95 8.28334L7.99999 10L7.04999 8.28334L5.33333 7.33334L7.04999 6.38334L7.99999 4.66667Z"
              stroke="#DB5B23"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{suggestion}</p>
        </div>
      </div>

      <div className="px-2 py-5 flex flex-row justify-between gap-4">
        <Link
          to={`/lahan/${landId}`}
          className="text-black hover:text-black hover:opacity-80 flex-1"
        >
          <p>{landName}</p>
          <p>{landSize}</p>
        </Link>

        <div
          onClick={onFlush}
          className="flex flex-col justify-end items-center px-4 cursor-pointer rounded-md "
        >
          {isFlush ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <g clip-path="url(#clip0_166_173)">
                  <g filter="url(#filter0_d_166_173)">
                    <path
                      d="M19 19C18.5671 19 18.2045 18.8533 17.9122 18.56C17.6199 18.2666 17.4732 17.904 17.4722 17.4722V5.24998C17.4722 4.81711 17.6189 4.45451 17.9122 4.1622C18.2056 3.86988 18.5681 3.72322 19 3.7222C19.4329 3.7222 19.796 3.86887 20.0893 4.1622C20.3826 4.45553 20.5288 4.81812 20.5278 5.24998V17.4722C20.5278 17.9051 20.3811 18.2682 20.0878 18.5615C19.7944 18.8548 19.4319 19.001 19 19ZM19 32.75C17.0903 32.75 15.3018 32.3874 13.6344 31.6622C11.9671 30.937 10.5157 29.9567 9.28028 28.7212C8.04481 27.4858 7.06449 26.0344 6.33931 24.3671C5.61412 22.6997 5.25102 20.9107 5.25 19C5.25 17.4467 5.50463 15.9378 6.01389 14.4732C6.52315 13.0085 7.26157 11.6656 8.22917 10.4444C8.50926 10.0879 8.86574 9.91632 9.29861 9.92956C9.73148 9.9428 10.1134 10.1144 10.4444 10.4444C10.7245 10.7245 10.8519 11.0683 10.8264 11.4757C10.8009 11.8831 10.6609 12.265 10.4062 12.6215C9.71875 13.5382 9.19676 14.544 8.84028 15.6389C8.4838 16.7338 8.30556 17.8541 8.30556 19C8.30556 21.9791 9.34343 24.5066 11.4192 26.5823C13.4949 28.6581 16.0219 29.6954 19 29.6944C21.9792 29.6944 24.5066 28.6571 26.5824 26.5823C28.6581 24.5076 29.6955 21.9802 29.6944 19C29.6944 17.8287 29.5228 16.689 29.1796 15.5808C28.8363 14.4727 28.295 13.4608 27.5556 12.5451C27.3009 12.2141 27.1609 11.8515 27.1354 11.4573C27.11 11.0632 27.2373 10.7255 27.5174 10.4444C27.8229 10.1389 28.1921 9.97998 28.625 9.96775C29.0579 9.95553 29.4144 10.1144 29.6944 10.4444C30.6875 11.6666 31.4453 13.0034 31.9678 14.4548C32.4903 15.9062 32.751 17.4213 32.75 19C32.75 20.9097 32.3874 22.6987 31.6622 24.3671C30.937 26.0354 29.9567 27.4868 28.7212 28.7212C27.4858 29.9557 26.0344 30.936 24.3671 31.6622C22.6998 32.3884 20.9107 32.751 19 32.75Z"
                      fill="#4169E1"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_166_173"
                    x="1.25"
                    y="1.7222"
                    width="35.5"
                    height="37.0278"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.254902 0 0 0 0 0.411765 0 0 0 0 0.882353 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_166_173"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_166_173"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_166_173">
                    <rect
                      width="36.6667"
                      height="36.6667"
                      fill="white"
                      transform="translate(0.666687 0.666656)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span>Menyiram...</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <path
                  d="M19 19C18.5671 19 18.2045 18.8533 17.9122 18.56C17.6199 18.2666 17.4732 17.904 17.4722 17.4722V5.24998C17.4722 4.81711 17.6189 4.45451 17.9122 4.1622C18.2056 3.86988 18.5681 3.72322 19 3.7222C19.4329 3.7222 19.796 3.86887 20.0893 4.1622C20.3826 4.45553 20.5288 4.81812 20.5278 5.24998V17.4722C20.5278 17.9051 20.3811 18.2682 20.0878 18.5615C19.7944 18.8548 19.4319 19.001 19 19ZM19 32.75C17.0903 32.75 15.3018 32.3874 13.6344 31.6622C11.9671 30.937 10.5157 29.9567 9.28028 28.7212C8.04481 27.4858 7.06449 26.0344 6.33931 24.3671C5.61412 22.6997 5.25102 20.9107 5.25 19C5.25 17.4467 5.50463 15.9378 6.01389 14.4732C6.52315 13.0085 7.26157 11.6656 8.22917 10.4444C8.50926 10.0879 8.86574 9.91632 9.29861 9.92956C9.73148 9.9428 10.1134 10.1144 10.4444 10.4444C10.7245 10.7245 10.8519 11.0683 10.8264 11.4757C10.8009 11.8831 10.6609 12.265 10.4062 12.6215C9.71875 13.5382 9.19676 14.544 8.84028 15.6389C8.4838 16.7338 8.30556 17.8541 8.30556 19C8.30556 21.9791 9.34343 24.5066 11.4192 26.5823C13.4949 28.6581 16.0219 29.6954 19 29.6944C21.9792 29.6944 24.5066 28.6571 26.5824 26.5823C28.6581 24.5076 29.6955 21.9802 29.6944 19C29.6944 17.8287 29.5228 16.689 29.1796 15.5808C28.8363 14.4727 28.295 13.4608 27.5556 12.5451C27.3009 12.2141 27.1609 11.8515 27.1354 11.4573C27.11 11.0632 27.2373 10.7255 27.5174 10.4444C27.8229 10.1389 28.1921 9.97998 28.625 9.96775C29.0579 9.95553 29.4144 10.1144 29.6944 10.4444C30.6875 11.6666 31.4453 13.0034 31.9678 14.4548C32.4903 15.9062 32.751 17.4213 32.75 19C32.75 20.9097 32.3874 22.6987 31.6622 24.3671C30.937 26.0354 29.9567 27.4868 28.7212 28.7212C27.4858 29.9557 26.0344 30.936 24.3671 31.6622C22.6998 32.3884 20.9107 32.751 19 32.75Z"
                  fill="#4F4F4F"
                />
              </svg>
              <span>Siram</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default CardLand;