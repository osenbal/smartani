import React from 'react';
import { twMerge } from 'tailwind-merge';

type AppButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  iconPosition?: 'left' | 'right';
  colorType?: 'primary' | 'secondary' | 'outline';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: React.FC<AppButtonProps> = ({
  children,
  onClick,
  icon,
  style,
  className,
  iconPosition = 'left',
  colorType = 'primary',
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
        className
      )}
      {...rest}
    >
      <div className="text-ellipsis whitespace-nowrap overflow-hidden max-w-[8rem]">
        {iconPosition === 'left' ? icon : null}
        {children}
        {iconPosition === 'left' ? icon : null}
      </div>
    </button>
  );
};

export default AppButton;
