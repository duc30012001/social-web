import { Menu } from 'antd';
import React from 'react';
import { protectedRoutes } from '../routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {};

function SidebarMenu({}: Props) {
  const pathname = usePathname();

  const items = protectedRoutes.map((item) => {
    return {
      key: item.href,
      icon: item.icon,
      label: <Link href={item.href}>{item.label}</Link>,
    };
  });
  return <Menu items={items} mode="inline" selectedKeys={[pathname]} />;
}

export default SidebarMenu;
