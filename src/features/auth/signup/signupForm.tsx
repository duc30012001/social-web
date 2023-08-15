'use client';

import { Button } from '@/components/ui';
import { Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';

type Props = {};

export function SignupForm({}: Props) {
  return (
    <Form layout="vertical">
      <Form.Item name="name" label="Name" required>
        <Input size="large" />
      </Form.Item>
      <Form.Item name="email" label="Email" required>
        <Input size="large" />
      </Form.Item>
      <Form.Item name="password" label="Password" required>
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
}
