'use client';
import { Button } from '@/design-system/Atom/Button';
import ArrowLeftIcon from '@/design-system/Atom/Icons/ArrowLeftIcon';
import PlusIcon from '@/design-system/Atom/Icons/PlusIcon';
import { FC } from 'react';
import { useRouter } from 'next/navigation';

type RoadmapNavbarType = {
  // goBackHandler: () => void;
};

const RoadmapNavbar: FC<RoadmapNavbarType> = () => {
  const router = useRouter();
  return (
    <div className='flex justify-between items-center w-full px-4 lg:py-7 lg:px-8 h-[11.3rem] lg:rounded-[10px] bg-primary'>
      <div className='flex flex-col gap-1'>
        <Button
          variant={'link'}
          className='px-0 -mb-3'
          onClick={() => router.push('/')}
        >
          <span className='-ml-4'>
            <ArrowLeftIcon width={10} height={10} color='#F2F4FE' />
          </span>

          <span className='text-white'>Go back</span>
        </Button>

        <h1 className='text-white'>Roadmap</h1>
      </div>

      <Button variant={'primary'} size={'large'} className='gap-x-2'>
        <PlusIcon width={10} height={10} color='#F2F4FE' />
        Add Feedback
      </Button>
    </div>
  );
};

export default RoadmapNavbar;
