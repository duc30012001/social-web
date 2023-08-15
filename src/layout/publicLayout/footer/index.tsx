import React from 'react';
import FooterNav from './nav';
import Container from '@/components/container';
import CopyRight from './copyRight';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="py-20 relative bg-neutral-950 text-white rounded-t-3xl">
      <Container>
        <FooterNav />
        <hr className="h-1 border-t border-t-gray-800 w-full mb-8"></hr>
        <CopyRight />
      </Container>
    </footer>
  );
}

export default Footer;
