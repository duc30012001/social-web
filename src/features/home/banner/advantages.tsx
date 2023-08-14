import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

type Props = {};

const advantages = [
  {
    id: 1,
    label: '24/7 Support Through Telegram',
  },
  {
    id: 3,
    label: 'Lowest Prices',
  },
  {
    id: 4,
    label: 'Privacy Protected',
  },
];

function Advantages({}: Props) {
  return (
    <ul className="grid font-bold max-w-sm justify-center mx-auto">
      {advantages.map((item) => (
        <li key={item.id} className="flex items-center">
          <BsCheckCircleFill className="text-green-700 mr-1" />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export default Advantages;
