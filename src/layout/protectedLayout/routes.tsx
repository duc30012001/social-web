import { ReactNode } from 'react';
import {
  AiOutlineCreditCard,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineOrderedList,
  AiOutlineUser,
} from 'react-icons/ai';
import { BsCash, BsCodeSlash } from 'react-icons/bs';

export type ProtectedRouteType = {
  id: number;
  label: string;
  href: string;
  icon: ReactNode;
};

export const protectedRoutes: ProtectedRouteType[] = [
  {
    id: 1,
    label: 'Home',
    href: '/dashboard',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    label: 'My Orders',
    href: '/view-submissions',
    icon: <AiOutlineOrderedList />,
  },
  {
    id: 3,
    label: 'Services & Pricing',
    href: '/price-list',
    icon: <AiOutlineCreditCard />,
  },
  {
    id: 4,
    label: 'Support',
    href: '/support-tickets',
    icon: <AiOutlineMail />,
  },
  {
    id: 5,
    label: 'Profile',
    href: '/identity',
    icon: <AiOutlineUser />,
  },
  {
    id: 6,
    label: 'Billing',
    href: '/address',
    icon: <BsCash />,
  },
  {
    id: 7,
    label: 'Deposit History',
    href: '/order-history',
    icon: <AiOutlineUser />,
  },
  {
    id: 8,
    label: 'API',
    href: '/documentation',
    icon: <BsCodeSlash />,
  },
];
