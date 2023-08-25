import { Card, CardProps, Divider } from 'antd';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type DataType = {
  title: ReactNode;
  description: ReactNode;
};

type Props = {
  dataLeft: DataType;
  dataRight: DataType;
  color: string;
} & CardProps;

export function StatisticCard({ title, dataLeft, dataRight, color }: Props) {
  return (
    <Card title={title}>
      <div className={twMerge('flex p-4 rounded-lg', color)}>
        <div className="grow flex flex-col items-center justify-center border-r border-white">
          <p className="text-xl font-bold text-white">{dataLeft.title}</p>
          <p className="text-gray-50">{dataLeft.description}</p>
        </div>
        <div className="grow flex flex-col items-center justify-center">
          <p className="text-xl font-bold text-white">{dataRight.title}</p>
          <p className="text-gray-50">{dataRight.description}</p>
        </div>
      </div>
    </Card>
  );
}
