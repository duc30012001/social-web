import { SignupForm } from '@/features/auth/signup';
import Link from 'next/link';
import React from 'react';

type Props = {};

function SignupPage({}: Props) {
  return (
    <div>
      <p className="m-6 text-center text-2xl font-bold">Login</p>
      <SignupForm />
      <div className="mt-4 text-center">
        <span className="text-gray-400">Already have account?</span>{' '}
        <Link href={'/auth/login'} className="text-blue-700">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
