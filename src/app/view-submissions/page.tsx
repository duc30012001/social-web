import { TypeContainer } from '@/components/container';
import Section from '@/components/section';
import { OrdersTable } from '@/features/order';
import { ProtectedLayout } from '@/layout';
import React from 'react';

type Props = {};

function MyOrdersPage({}: Props) {
  return (
    <ProtectedLayout>
      <Section title="Recent Orders" typeContainer={TypeContainer.PROTECTED}>
        {/* <ServiceHeader /> */}
        <OrdersTable
          pagination={{
            position: ['bottomCenter'],
            pageSize: 20,
          }}
        />
      </Section>
    </ProtectedLayout>
  );
}

export default MyOrdersPage;
