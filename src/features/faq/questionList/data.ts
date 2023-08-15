export type QuestionType = {
  label: string;
  href: string;
  id: number;
};

export type QuestionListType = {
  id: number;
  title: string;
  data: QuestionType[];
};

export const questionList: QuestionListType[] = [
  {
    id: 1,
    title: 'General',
    data: [
      {
        id: 2,
        label:
          'I am new to QQTube how can I get started? How does your site work?',
        href: '',
      },
      {
        id: 3,
        label: 'How can I contact you? Customer Support',
        href: '',
      },
      {
        id: 4,
        label:
          'Do Your Services Drop? What Happens If The Service I Purchased Drops?',
        href: '',
      },
      {
        id: 5,
        label:
          'Can I try your services before making a deposit? Do you have a Free Trial?',
        href: '',
      },
      {
        id: 6,
        label: 'How much does a service cost?',
        href: '',
      },
      {
        id: 7,
        label: 'How can I find out more about the services you offer?',
        href: '',
      },
      {
        id: 8,
        label: 'How do you deliver your services?',
        href: '',
      },
      {
        id: 9,
        label: 'Why Should I Trust Your Company?',
        href: '',
      },
      {
        id: 10,
        label: 'What is your refund policy and return policy?',
        href: '',
      },
    ],
  },
  {
    id: 11,
    title: 'Deposits',
    data: [
      {
        id: 12,
        label: 'How Do I Deposit Funds?',
        href: '',
      },
      {
        id: 13,
        label: 'What Is the Minimum Deposit Amount?',
        href: '',
      },
      {
        id: 14,
        label: 'What Are Your Current Payment Methods?',
        href: '',
      },
      {
        id: 15,
        label: 'Do You Accept PayPal?',
        href: '',
      },
    ],
  },
  {
    id: 16,
    title: 'Your Account',
    data: [
      {
        id: 17,
        label: 'How do I close my account?',
        href: '',
      },
      {
        id: 18,
        label: 'How can I get the balance in my QQTube account refunded?',
        href: '',
      },
    ],
  },
  {
    id: 19,
    title: 'Reseller',
    data: [
      {
        id: 20,
        label: 'How do I become a Reseller and what are the benefits?',
        href: '',
      },
      {
        id: 21,
        label: 'How Do I Place Orders From My Own Site? API Information',
        href: '',
      },
    ],
  },
  {
    id: 22,
    title: 'Seller',
    data: [
      {
        id: 23,
        label: 'How can I sell my services on QQTube?',
        href: '',
      },
      {
        id: 24,
        label: 'When will my service be added?',
        href: '',
      },
      {
        id: 25,
        label: 'How do I receive funds from my services?',
        href: '',
      },
    ],
  },
];
