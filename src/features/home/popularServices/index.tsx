import Section from '@/components/section';
import React from 'react';
import { Button } from '@/components/ui';
import { ViewAllButton } from '../components/viewAllButton';
import { ServiceHeader, ServicesTable } from '@/components/services';

type Props = {};

function PopularServices({}: Props) {
  return (
    <Section title="Most Popular Services">
      <ServiceHeader />
      <ServicesTable pagination={false} />
      <ViewAllButton href="services" />
    </Section>
  );
}

export default PopularServices;
