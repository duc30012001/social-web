import Section from '@/components/section';
import React from 'react';
import { ServiceHeader, ServicesTable } from '@/components/services';

type Props = {};

function Service({}: Props) {
  return (
    <Section title="Services & Pricing">
      <ServiceHeader />
      <ServicesTable
        pagination={{
          position: ['bottomCenter'],
          pageSize: 20,
        }}
      />
    </Section>
  );
}

export default Service;
