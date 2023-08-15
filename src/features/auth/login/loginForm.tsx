'use client';

import { Button } from '@/components/ui';
import { Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';

type Props = {};

export function LoginForm({}: Props) {
  return (
    <Form layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Please enter value',
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        required
        rules={[
          {
            required: true,
            message: 'Please enter value',
          },
        ]}
      >
        <Input.Password size="large" />
      </Form.Item>
      <div className="flex justify-between mb-4">
        <Link href={'/'} className="text-blue-700">
          Home
        </Link>
        <Link href={'/'} className="text-blue-700">
          Reset Password
        </Link>
      </div>
      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
