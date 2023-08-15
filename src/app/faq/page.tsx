import Section from '@/components/section';
import { QuestionList, SearchComponent } from '@/features/faq';
import { PublicLayout } from '@/layout';
import React from 'react';

type Props = {};

function FAQPage({}: Props) {
  return (
    <PublicLayout>
      <Section title="Ask your question" className="bg-blue-50 pb-14">
        <div className="flex justify-center">
          <SearchComponent />
        </div>
      </Section>
      <Section title="Frequently Asked Questions">
        <QuestionList />
      </Section>
    </PublicLayout>
  );
}

export default FAQPage;
