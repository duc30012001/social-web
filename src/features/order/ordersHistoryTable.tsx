'use client';

import { Table, Tag } from 'antd';
import React from 'react';
import type { ColumnsType, TableProps } from 'antd/es/table';
import dayjs from 'dayjs';

interface DataType {
  date: string;
  id: string;
  total: number;
  status: string;
  invoice: string;
}

type Props = {} & TableProps<DataType>;

const data: DataType = {
  date: 'Wed Aug 16 2023 09:29:33 GMT+0700 (Indochina Time)',
  id: 'NRCRDVXWL',
  total: 40,
  status: 'Payment accepted',
  invoice: '',
};

export function OrdersHistoryTable(props: Props) {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (cell) => dayjs(cell).format('MM/DD/YYYY HH:mm'),
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  return (
    <Table columns={columns} dataSource={Array(50).fill(data)} {...props} />
  );
}
