import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import Content from './content';
import theme from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';

type Props = {
  children: ReactNode;
};

export function PublicLayout({ children }: Props) {
  return (
    <div className="bg-background">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
