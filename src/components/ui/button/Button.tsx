import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import { twMerge } from 'tailwind-merge';

export function Button({ className, ...props }: ButtonProps) {
  return (
    <AntdButton
      {...props}
      className={twMerge(
        '!h-auto !px-6 !py-2 !inline-flex justify-center items-center',
        className
      )}
    />
  );
}
