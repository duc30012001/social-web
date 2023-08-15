import { Button } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
};

export function ViewAllButton({ href }: Props) {
  return (
    <div className="text-center mt-10">
      <Button type="primary">
        <Link href={href}>View All</Link>
      </Button>
    </div>
  );
}
