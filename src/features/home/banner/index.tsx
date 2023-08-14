import Section from '@/components/section';
import React from 'react';
import Advantages from './advantages';
import Image from 'next/image';
import BannerImage from '@/assets/banner-home.webp';

type Props = {};

function Banner({}: Props) {
  return (
    <Section
      title={
        <>
          Increasing Your Social Media <br />
          Following is <span className="text-primary">1 Click Away</span>
        </>
      }
    >
      <div className="relative z-10">
        <Advantages />
      </div>
      <div className="relative z-0 flex justify-center sm:mt-[-2rem] md:mt-[-4rem] lg:mt-[-8rem] xl:mt-[-11rem] 2xl:mt-[-16rem]">
        <Image src={BannerImage} alt="banner" width={1300} height={700} />
      </div>
    </Section>
  );
}

export default Banner;
