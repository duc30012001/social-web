import { Button } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

type Props = {};

function Action({}: Props) {
  return (
    <div>
      <Button type="primary">
        <Link href={'/auth/login'}>Login</Link>
      </Button>
    </div>
  );
}

export default Action;
