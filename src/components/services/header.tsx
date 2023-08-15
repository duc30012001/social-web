import { PlatformSelect, Search, ServiceSort } from '@/components/ui';
import { Space } from 'antd';
import React from 'react';

type Props = {};

export function ServiceHeader({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-between mb-4">
      <PlatformSelect className="w-full lg:w-48" />
      <div className="flex flex-col lg:flex-row gap-3">
        <Search />
        <ServiceSort className="w-full lg:w-48" />
      </div>
    </div>
  );
}
