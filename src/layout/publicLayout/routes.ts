import { ReactNode } from 'react';

export type publicRoutesType = {
  id: number | string;
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
  // {
  //   id: 3,
  //   label: 'Contact Us',
  //   href: '/contact',
  // },
];

export type footerRoutesType = {
  id: number | string;
  label: ReactNode;
  children: publicRoutesType[];
};

export const footerRoutes: footerRoutesType[] = [
  {
    id: 1,
    label: 'YouTube',
    children: [
      {
        id: '1-1',
        label: 'Buy Youtube Views',
        href: '',
      },
      {
        id: '1-2',
        label: 'Buy Youtube Subscribers',
        href: '',
      },
      {
        id: '1-3',
        label: 'Buy Youtube Likes',
        href: '',
      },
      {
        id: '1-4',
        label: 'Buy Youtube Comments',
        href: '',
      },
    ],
  },
  {
    id: 2,
    label: 'Instagram',
    children: [
      {
        id: '2-1',
        label: 'Buy Instagram Followers',
        href: '',
      },
      {
        id: '2-2',
        label: 'Buy Instagram Likes',
        href: '',
      },
      {
        id: '2-3',
        label: 'Buy Instagram Views',
        href: '',
      },
      {
        id: '2-4',
        label: 'Buy Instagram Comments',
        href: '',
      },
    ],
  },
  {
    id: 3,
    label: 'TikTok',
    children: [
      {
        id: '3-1',
        label: 'Buy TikTok Followers',
        href: '',
      },
      {
        id: '3-2',
        label: 'Buy TikTok Likes',
        href: '',
      },
      {
        id: '3-3',
        label: 'Buy TikTok Views',
        href: '',
      },
    ],
  },
  {
    id: 4,
    label: 'Twitter',
    children: [
      {
        id: '4-1',
        label: 'Buy Twitter Followers',
        href: '',
      },
      {
        id: '4-2',
        label: 'Buy Twitter Likes',
        href: '',
      },
    ],
  },
  {
    id: 5,
    label: 'Twitch',
    children: [
      {
        id: '5-1',
        label: 'Buy Twitch Followers',
        href: '',
      },
      {
        id: '5-2',
        label: 'Buy Twitch Subscribers',
        href: '',
      },
    ],
  },
  {
    id: 6,
    label: 'Facebook',
    children: [
      {
        id: '6-1',
        label: 'Buy Facebook Followers',
        href: '',
      },
      {
        id: '6-2',
        label: 'Buy Facebook Likes',
        href: '',
      },
      {
        id: '6-3',
        label: 'Buy Facebook Comments',
        href: '',
      },
    ],
  },
  {
    id: 7,
    label: 'SoundCloud',
    children: [
      {
        id: '7-1',
        label: 'Buy SoundCloud Plays',
        href: '',
      },
    ],
  },
  {
    id: 8,
    label: 'Telegram',
    children: [
      {
        id: '8-1',
        label: 'Buy Telegram Members',
        href: '',
      },
    ],
  },
  {
    id: 9,
    label: 'Spotify',
    children: [
      {
        id: '9-1',
        label: 'Buy Spotify Followers',
        href: '',
      },
    ],
  },
];
