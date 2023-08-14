import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function Content({ children }: Props) {
  return <div>{children}</div>;
}

export default Content;
