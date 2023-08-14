import React, { ReactNode } from 'react';
import SectionTitle from './sectionTitle';

type Props = {
  title: ReactNode;
  children: ReactNode;
};

function Section({ title, children }: Props) {
  return (
    <div>
      <SectionTitle title={title} />
      <div className="max-w-screen-xxl mx-auto">{children}</div>
    </div>
  );
}

export default Section;
