'use client';

import { Select, SelectProps } from 'antd';
import React from 'react';

const options = [
  {
    label: 'Most Popular',
    value: 1,
  },
  {
    label: 'Highest Rated',
    value: 2,
  },
  {
    label: 'Pice High/Low',
    value: 3,
  },
  {
    label: 'Price Low/High',
    value: 4,
  },
];

type Props = {} & SelectProps;

export function ServiceSort({ className }: Props) {
  return (
    <Select
      className={className}
      showSearch
      options={options}
      defaultValue={options[0].value}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    />
  );
}
