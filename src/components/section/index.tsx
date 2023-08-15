import React, { ReactNode } from 'react';
import SectionTitle from './sectionTitle';
import { twMerge } from 'tailwind-merge';
import Container, { TypeContainer } from '../container';

type Props = {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  typeContainer?: TypeContainer;
};

function Section({
  title,
  children,
  className,
  description,
  typeContainer,
}: Props) {
  return (
    <div className={twMerge('py-10', className)}>
      <Container typeContainer={typeContainer}>
        <SectionTitle title={title} description={description} />
        {children}
      </Container>
    </div>
  );
}

export default Section;
