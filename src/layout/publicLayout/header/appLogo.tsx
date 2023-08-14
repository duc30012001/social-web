import Image from 'next/image';
import React from 'react';
import logoImage from '@/assets/logo.webp';

type Props = {};

function AppLogo({}: Props) {
  return <Image src={logoImage} alt="logo" width={123} height={36} />;
}

export default AppLogo;
