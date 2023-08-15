import React from 'react';

type Props = {};

function UserInfo({}: Props) {
  return (
    <div>
      <h3 className="font-bold text-xl text-near-black lg:text-[1.40rem] leading-[1.40rem] lg:mt-[-1px]">
        duc30012001
      </h3>
      <p className="break-all">nguyenvietduc3001@gmail.com</p>
      <div className="grid grid-cols-2 overflow-hidden rounded-lg my-6 border border-blue-100">
        <div className="bg-blue-100 p-3 flex items-center flex-col justify-center">
          <p className="text-primary font-bold text-xl">$0.00</p>
          <p>Funds</p>
        </div>
        <div className="p-3 flex items-center flex-col justify-center">
          <p className="font-bold text-xl">0</p>
          <p>In progress</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
