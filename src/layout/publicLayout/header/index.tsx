import React from 'react';
import AppLogo from './appLogo';
import Navbar from './navbar';
import Action from './action';
import NavbarMobile from './navbarMobile';
import Container from '@/components/container';

type Props = {};

function Header({}: Props) {
  return (
    <header className="p-3 mb-20">
      <nav>
        <Container>
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
        </Container>
      </nav>
    </header>
  );
}

export default Header;
