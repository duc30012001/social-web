import React from 'react';
import { footerRoutes } from '../routes';
import Link from 'next/link';

type Props = {};

function FooterNav({}: Props) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-20">
      {footerRoutes.map((item) => (
        <li key={item.id}>
          <h3 className="text-white font-bold mb-4 text-xl">{item.label}</h3>
          <ul className="list-none flex flex-col space-y-3">
            {item.children.map((child) => (
              <li key={child.id}>
                <Link href={child.href}>{child.label}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default FooterNav;
