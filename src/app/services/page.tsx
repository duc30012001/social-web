import { PublicLayout } from '@/layout';
import dynamic from 'next/dynamic';
import React from 'react';

type Props = {};

const Service = dynamic(() => import('@/features/services'));

function ServicePage({}: Props) {
  return (
    <PublicLayout>
      <Service />
    </PublicLayout>
  );
}

export default ServicePage;
