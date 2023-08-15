'use client';

import { Layout } from 'antd';
import React, { ReactNode } from 'react';
import Sidebar from './sidebar';
import Content from './content';

type Props = {
  children: ReactNode;
};

export function ProtectedLayout({ children }: Props) {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
