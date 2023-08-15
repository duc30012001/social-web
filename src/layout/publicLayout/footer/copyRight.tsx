import React from 'react';
import footerImage from '@/assets/footer-payment-options-no-payoneer.webp';
import Image from 'next/image';

type Props = {};

function CopyRight({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between my-10 gap-5">
      <p>©2013 - 2023 QQTube. All Rights Reserved.</p>
      <div>
        <Image src={footerImage} alt="payment" width={270} height={30} />
      </div>
    </div>
  );
}

export default CopyRight;
