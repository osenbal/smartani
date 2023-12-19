import React from 'react';
import { twMerge } from 'tailwind-merge';

type AppInputProps = {
  labelTop: React.ReactNode;
  iconPlace?: 'left' | 'right';
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  classContainer?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const AppInput: React.FC<AppInputProps> = ({
  onChange,
  errorText,
  labelTop,
  iconPlace,
  icon,
  classContainer,
  ...rest
}) => {
  return (
    <div className={twMerge('flex flex-col gap-y-2', classContainer)}>
      <div>{labelTop}</div>
      <div className="flex flex-row gap-x-2 items-center justify-start py-5 px-6 bg-white rounded-2xl overflow-hidden">
        {iconPlace === 'left' ? icon : null}
        <input
          type="text"
          {...rest}
          onChange={onChange}
          style={{
            minWidth: '0',
          }}
          className="focus:outline-none flex-1"
        />
        {iconPlace === 'right' ? icon : null}
      </div>
      <span className="text-red-500">{errorText}</span>
    </div>
  );
};

export default AppInput;
