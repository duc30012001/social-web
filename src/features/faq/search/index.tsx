'use client';

import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

type Props = {};

export function SearchComponent({}: Props) {
  return (
    <Search
      placeholder="Enter your question"
      allowClear
      enterButton="Search"
      size="large"
      className="max-w-lg"
    />
  );
}
