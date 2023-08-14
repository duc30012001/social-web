import Section from '@/components/section';
import React from 'react';
import ServiceTable from './ServiceTable';
import Button from '@/lib/Button';

type Props = {};

function PopularServices({}: Props) {
  return (
    <Section title="Most Popular Services">
      <ServiceTable />
      <div className="text-center mt-16">
        <Button type="primary">View All Service</Button>
      </div>
    </Section>
  );
}

export default PopularServices;
