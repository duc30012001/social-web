import { Layout } from 'antd';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const { Content } = Layout;

function ContentComponent({ children }: Props) {
  return (
    <Content className="!h-screen bg-slate-100 p-10 overflow-auto">
      {children}
    </Content>
  );
}

export default ContentComponent;
