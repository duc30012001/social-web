import React, { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  description?: ReactNode;
};

function SectionTitle({ title, description }: Props) {
  return (
    <>
      <h2 className="section-header text-5xl leading-tight font-bold text-center mb-10">
        {title}
      </h2>
      <p className="leading-loose mb-14 text-gray-600 text-center">
        {description}
      </p>
    </>
  );
}

export default SectionTitle;
