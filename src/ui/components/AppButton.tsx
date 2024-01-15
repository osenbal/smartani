import React from 'react';
import { twMerge } from 'tailwind-merge';
import { PuffLoader } from 'react-spinners';

type AppButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  isLoading?: boolean;
  containerClassName?: string;
  iconPosition?: 'left' | 'right';
  colorType?: 'primary' | 'secondary' | 'outline';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: React.FC<AppButtonProps> = ({
  children,
  icon,
  style,
  className,
  isLoading,
  iconPosition = 'left',
  colorType = 'primary',
  containerClassName,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        'flex flex-row flex-nowrap items-center justify-center rounded-full px-4 py-2 transition-all duration-300 ease-in-out',
        colorType === 'primary' &&
          'bg-main-darkGreen text-white border-none outline-none hover:opacity-[0.9] active:opacity-[0.9] hover:outline-none hover:border-none active:outline-none active:border-none focus:outline-none focus:border-none',
        colorType === 'secondary' &&
          'bg-main-darkOrange text-white border-none outline-none hover:opacity-[0.9] active:opacity-[0.9] hover:outline-none hover:border-none active:outline-none active:border-none focus:outline-none focus:border-none',
        colorType === 'outline' &&
          'bg-white text-main-darkGreen border border-main-darkGreen',
        isLoading && 'opacity-50 cursor-not-allowed',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'max-h-[4rem]',
        className
      )}
      {...rest}
    >
      <div
        className={twMerge(
          'whitespace-nowrap flex flex-row items-center gap-4',
          containerClassName
        )}
      >
        {isLoading ? (
          <PuffLoader color="#36d7b7" size={32} />
        ) : iconPosition === 'left' ? (
          icon
        ) : null}
        {children}
        {iconPosition === 'right' ? icon : null}
      </div>
    </button>
  );
};

export default AppButton;
