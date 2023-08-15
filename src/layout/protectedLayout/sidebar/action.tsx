import { Button } from '@/components/ui';
import React from 'react';
import { MdAddCircle } from 'react-icons/md';

type Props = {};

function Action({}: Props) {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <Button
        icon={<MdAddCircle />}
        type="primary"
        className="w-full"
        size="large"
      >
        New Order
      </Button>
      <Button
        icon={<MdAddCircle />}
        className="w-full !bg-green-600 !text-white"
        size="large"
      >
        Deposit
      </Button>
    </div>
  );
}

export default Action;
