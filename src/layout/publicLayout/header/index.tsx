import React from 'react';
import AppLogo from './appLogo';
import Navbar from './navbar';
import Action from './action';
import NavbarMobile from './navbarMobile';

type Props = {};

function Header({}: Props) {
  return (
    <header className="p-3 mb-20">
      <nav>
        <div className="container mx-auto max-w-7xl">
          <ul className="flex flex-row items-center justify-between">
            <li className="block lg:hidden">
              <NavbarMobile />
            </li>
            <AppLogo />
            <li className="hidden lg:block">
              <Navbar />
            </li>
            <Action />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
