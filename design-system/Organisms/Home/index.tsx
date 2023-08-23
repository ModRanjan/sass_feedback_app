'use client';

import { useRouter } from 'next/navigation';
import Sidebar from '../Sidebar';
import Suggestions from '../Suggestions';

const Home = () => {
  const router = useRouter();
  return (
    <div className='suggestion-wrapper'>
      <div className='sidebar-container'>
        <Sidebar roadmapHandler={() => router.push('/roadmap')} />
      </div>

      <div className='main-container'>
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
