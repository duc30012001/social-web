import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/features/home'));

export default function HomePage() {
  return <Home />;
}
