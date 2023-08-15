import { ProtectedLayout } from '@/layout';
import React from 'react';
import Section from '@/components/section';
import { ServiceHeader, ServicesTable } from '@/components/services';
import { TypeContainer } from '@/components/container';

type Props = {};

function PriceListPage({}: Props) {
  return (
    <ProtectedLayout>
      <Section
        title="Services & Pricing"
        typeContainer={TypeContainer.PROTECTED}
      >
        <ServiceHeader />
        <ServicesTable
          pagination={{
            position: ['bottomCenter'],
            pageSize: 20,
          }}
        />
      </Section>
    </ProtectedLayout>
  );
}

export default PriceListPage;
