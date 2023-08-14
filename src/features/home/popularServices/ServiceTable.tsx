'use client';

import { Table } from 'antd';
import React from 'react';
import type { ColumnsType } from 'antd/es/table';

type Props = {};

interface DataType {
  id: number;
  name: string;
  description: string;
  rate: number;
  qa: number;
  startTime: string;
  minOrder: number;
  maxOrder: number;
  speed: string;
  pricePerThousand: number;
}

const data: DataType[] = [
  {
    id: 1998,
    name: 'YouTube Views',
    description: '',
    rate: 131,
    qa: 1,
    startTime: 'Instant Start',
    minOrder: 100,
    maxOrder: 10000000,
    speed: '100 - 50000',
    pricePerThousand: 3.2,
  },
];

function ServiceTable({}: Props) {
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Service',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Rated',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Q&A',
      dataIndex: 'qa',
      key: 'qa',
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'Min Order',
      dataIndex: 'minOrder',
      key: 'minOrder',
    },
    {
      title: 'Max Order',
      dataIndex: 'maxOrder',
      key: 'maxOrder',
    },
    {
      title: 'Speed',
      dataIndex: 'speed',
      key: 'speed',
      render: (cell) => (
        <p>
          <span className="font-semibold">{cell}</span> <br /> per day
        </p>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'pricePerThousand',
      key: 'pricePerThousand',
      render: (cell) => (
        <p>
          <span className="font-semibold">{cell}</span> <br /> USD
        </p>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} pagination={false} />;
}

export default ServiceTable;
