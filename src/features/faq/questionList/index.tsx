import React from 'react';
import { questionList } from './data';
import { Card } from 'antd';
import Link from 'next/link';

type Props = {};

export function QuestionList({}: Props) {
  return (
    <div>
      {questionList.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          className="mb-10"
          bordered={false}
        >
          <ul>
            {item.data.map((child) => (
              <li key={child.id} className="mb-2">
                <Link href={child.href} className="text-black hover:underline">
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
