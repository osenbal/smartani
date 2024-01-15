import React from 'react';
import { twMerge } from 'tailwind-merge';

type AppInputProps = {
  labelTop: React.ReactNode;
  iconPlace?: 'left' | 'right';
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  classContainer?: string;
  disabledContainer?: boolean;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const AppInput: React.FC<AppInputProps> = ({
  onChange,
  errorText,
  labelTop,
  iconPlace,
  icon,
  classContainer,
  disabled,
  ...rest
}) => {
  return (
    <div className={twMerge('flex flex-col gap-y-2', classContainer)}>
      <div>{labelTop}</div>
      <div
        className={twMerge(
          'flex flex-row gap-x-2 items-center justify-start h-[4rem] bg-white rounded-2xl overflow-hidden transition-all duration-100 ease-linear',
          disabled && 'opacity-50 cursor-not-allowed',
          icon && 'pe-6'
        )}
      >
        {iconPlace === 'left' ? icon : null}
        <input
          type="text"
          {...rest}
          onChange={onChange}
          style={{
            minWidth: '0',
          }}
          onFocus={(e) => {
            const styleParentOutline = '2px solid rgb(187 247 208)';
            const styleParent = e.currentTarget.parentElement?.style;

            if (styleParent) {
              styleParent.border = styleParentOutline;
            }
          }}
          onBlur={(e) => {
            const styleParentOutline = '0px solid rgb(229 231 235)';
            const styleParent = e.currentTarget.parentElement?.style;

            if (styleParent) {
              styleParent.border = styleParentOutline;
            }
          }}
          className={twMerge(
            'rounded-2xl flex-1 h-full bg-transparent ps-6 opacity-50 focus:opacity-100 focus:outline-none focus:border-none focus:ring-0'
          )}
        />
        {iconPlace === 'right' ? icon : null}
      </div>
      <span className="text-red-500">{errorText}</span>
    </div>
  );
};

export default AppInput;
