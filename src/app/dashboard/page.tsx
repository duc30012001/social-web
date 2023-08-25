import { TypeContainer } from '@/components/container';
import Section from '@/components/section';
import { StatisticCard } from '@/features/dashboard';
import { OrdersTable } from '@/features/order';
import { ProtectedLayout } from '@/layout';
import React from 'react';

type Props = {};

function DashboardPage({}: Props) {
  return (
    <ProtectedLayout>
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <StatisticCard
          title="ORDERS"
          dataLeft={{
            title: 1,
            description: 'In Progress',
          }}
          dataRight={{
            title: 50,
            description: 'Complete',
          }}
          color="bg-blue-700"
        />
        <StatisticCard
          title="FUNDS"
          dataLeft={{
            title: '$2.94',
            description: 'Current',
          }}
          dataRight={{
            title: '$155.00',
            description: 'LifeTime',
          }}
          color="bg-green-600"
        />
      </div>
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

export default DashboardPage;
