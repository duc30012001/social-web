import Section from '@/components/section';
import React from 'react';
import Image from 'next/image';
import Banner from './banner';
import PopularServices from './popularServices';

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <Banner />
      <PopularServices />
    </div>
  );
}

export default Home;
