import { ReactNode } from 'react';

export type publicRoutesType = {
  id: number;
  label: ReactNode;
  href: string;
};

export const publicRoutes: publicRoutesType[] = [
  {
    id: 1,
    label: 'Services & Pricing',
    href: '/services',
  },
  {
    id: 2,
    label: 'FAQ',
    href: '/faq',
  },
  {
    id: 3,
    label: 'Contact Us',
    href: '/contact',
  },
];
