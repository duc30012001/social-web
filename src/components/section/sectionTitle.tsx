import React, { ReactNode } from 'react';

type Props = {
  title: ReactNode;
};

function SectionTitle({ title }: Props) {
  return (
    <h2 className="section-header text-5xl leading-tight font-bold text-center mb-10">
      {title}
    </h2>
  );
}

export default SectionTitle;
