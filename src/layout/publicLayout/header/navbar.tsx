import React from 'react';
import { publicRoutes, publicRoutesType } from '../routes';
import Link from 'next/link';
import Menu from './menu';

type Props = {};

function Navbar({}: Props) {
  return (
    <ul className="flex flex-row space-x-10 list-none">
      <Menu />
    </ul>
  );
}

export default Navbar;
