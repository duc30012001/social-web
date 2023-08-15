import Image from 'next/image';
import React from 'react';
import logoImage from '@/assets/logo.webp';
import Link from 'next/link';

type Props = {};

function AppLogo({}: Props) {
  return (
    <Link href={'/'}>
      <Image src={logoImage} alt="logo" width={123} height={36} />
    </Link>
  );
}

export default AppLogo;
