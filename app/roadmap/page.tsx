'use client';
import { useRouter } from 'next/navigation';

import RoadmapNavbar from '@/design-system/Molecules/Navbar/RoadmapNavbar';
import RoadmapContent from '@/design-system/Organisms/Roadmaps';

const RoadMap = () => {
  const router = useRouter();
  return (
    <>
      <RoadmapNavbar
        goBackHandler={() => router.push('/')}
        feedbackHandler={() => router.push('/feedback/')}
      />

      <RoadmapContent />
    </>
  );
};

export default RoadMap;
