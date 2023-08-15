import { LoginForm } from '@/features/auth/login';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

type Props = {};

function LoginPage({}: Props) {
  return (
    <div>
      <p className="m-6 text-center text-2xl font-bold">Login</p>
      <LoginForm />
      <div className="mt-4 text-center">
        <span className="text-gray-400">Do not have account?</span>{' '}
        <Link href={'/auth/signup'} className="text-blue-700">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
