'use client';

import { Table, Tag } from 'antd';
import React from 'react';
import type { ColumnsType, TableProps } from 'antd/es/table';
import dayjs from 'dayjs';

interface DataType {
  id: number;
  dateAdded: string;
  url: string;
  details: string;
  review: number;
  price: number;
  wanted: number;
  start: number;
  current: number;
  status: number;
}

type Props = {} & TableProps<DataType>;

const data: DataType = {
  id: 1998,
  dateAdded: 'Wed Aug 16 2023 09:29:33 GMT+0700 (Indochina Time)',
  url: 'https://www.qqtube.com/view-submissions',
  details: 'string',
  review: 4,
  price: 4,
  wanted: 32,
  start: 0,
  current: 19,
  status: 1,
};

export function OrdersTable(props: Props) {
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date Added',
      dataIndex: 'dateAdded',
      key: 'dateAdded',
      render: (cell) => dayjs(cell).format('MM/DD/YYYY HH:mm'),
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: 'Review',
      dataIndex: 'review',
      key: 'review',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Wanted',
      dataIndex: 'wanted',
      key: 'wanted',
    },
    {
      title: 'Start',
      dataIndex: 'start',
      key: 'start',
    },
    {
      title: 'Current',
      dataIndex: 'current',
      key: 'current',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: () => <Tag color="green">Complete</Tag>,
    },
  ];
  return (
    <Table columns={columns} dataSource={Array(50).fill(data)} {...props} />
  );
}
