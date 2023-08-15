import { Layout } from 'antd';
import React from 'react';
import SidebarMenu from './sidebarMenu';
import Action from './action';
import UserInfo from './userInfo';

type Props = {};

const { Sider } = Layout;

function Sidebar({}: Props) {
  return (
    <Sider
      collapsible
      width={280}
      collapsedWidth="0"
      theme="light"
      breakpoint="xl"
    >
      <div className="overflow-auto h-screen py-10">
        <div className="px-5">
          <UserInfo />
          <Action />
        </div>
        <SidebarMenu />
      </div>
    </Sider>
  );
}

export default Sidebar;
