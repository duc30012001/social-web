import { TypeContainer } from '@/components/container';
import Section from '@/components/section';
import { OrdersHistoryTable } from '@/features/order';
import { ProtectedLayout } from '@/layout';
import React from 'react';

type Props = {};

function DepositHistoryPage({}: Props) {
  return (
    <ProtectedLayout>
      <Section title="Order History" typeContainer={TypeContainer.PROTECTED}>
        {/* <ServiceHeader /> */}
        <OrdersHistoryTable
          pagination={{
            position: ['bottomCenter'],
            pageSize: 20,
          }}
        />
      </Section>
    </ProtectedLayout>
  );
}

export default DepositHistoryPage;
