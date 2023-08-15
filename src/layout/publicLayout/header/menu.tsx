import React from 'react';
import { publicRoutes, publicRoutesType } from '../routes';
import Link from 'next/link';

type Props = {};

function Menu({}: Props) {
  return (
    <>
      {publicRoutes.map((item: publicRoutesType) => (
        <li key={item.id} className="py-4">
          <Link href={item.href} className="hover:text-primary font-medium">
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Menu;
