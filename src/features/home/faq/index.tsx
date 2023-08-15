import Section from '@/components/section';
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Button } from '@/components/ui';
import { ViewAllButton } from '../components/viewAllButton';

type Props = {};

const text =
  'You can view our How To Get Started With QQTube guide for step-by-step instructions on making a deposit, browsing services, placing an order, monitoring your orders from your customer dashboard, and more.';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label:
      'I’m new to QQTube - how can I get started? How does your site work?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'How can I contact you? / Customer Support',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'How do you deliver your services?',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'Why Should I Trust Your Company?',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'What is your refund policy / return policy?',
    children: <p>{text}</p>,
  },
];

function FAQ({}: Props) {
  return (
    <Section
      title="Frequently Asked Questions"
      description="Have a question? We've got you covered. We've put together a selection of our most commonly asked questions to help you get answers fast. Have a question that you don't see answered here? Reach out to us and our 24/7 customer support team will help!"
    >
      <Collapse accordion items={items} expandIconPosition="end" size="large" />
      <ViewAllButton href="/faq" />
    </Section>
  );
}

export default FAQ;
