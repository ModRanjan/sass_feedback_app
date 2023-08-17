'use client';
import Badge from '@/design-system/Atom/Badge';
import { Button, Highlight } from '@/design-system/Atom/Button';
import { Container } from '@/design-system/Atom/Container';
import ArrowLeftIcon from '@/design-system/Atom/Icons/ArrowLeftIcon';
import { ArrowUpIcon } from '@/design-system/Atom/Icons/ArrowUpIcon';
import { CommentsIcon } from '@/design-system/Atom/Icons/CommentsIcon';
import PlusIcon from '@/design-system/Atom/Icons/PlusIcon';
import { useRouter } from 'next/navigation';

const View = () => {
  const router = useRouter();
  return (
    <Container className='px-4'>
      <div className='flex justify-between mb-5'>
        <Button
          variant={'link'}
          className='px-0 -mb-3'
          onClick={() => router.push('/')}
        >
          <span className='-ml-4'>
            <ArrowLeftIcon width={10} height={10} color='#4661E6' />
          </span>

          <span className='text-grey'>Go back</span>
        </Button>

        <Highlight variant={'horizontal'} className='gap-x-2'>
          Edit Feedback
        </Highlight>
      </div>

      <div className='flex flex-col lg:flex-row p-6 lg:p-8 w-full rounded-[10px] bg-white lg:gap-x-8 gap-x-4'>
        <Highlight
          variant='vetical'
          size='large'
          className='hidden lg:flex w-fit justify-center h-24 mt-2'
        >
          <ArrowUpIcon width={14} height={14} color='#4661E6' />
          {25}
        </Highlight>

        <div className='flex flex-col gap-y-2 w-full'>
          <div className='flex flex-col'>
            <h2>Add a dark theme option</h2>

            <div className='flex justify-between items-center'>
              <p className='text-lg text-gray-lighter font-medium mt-1 lg:mt-0'>
                It would help people with light sensitivities and who prefer
                dark mode.
              </p>

              <Button variant={'link'} className=' hidden lg:flex gap-x-4'>
                <CommentsIcon width={18} height={16} color='#CDD2EE' />
                {10}
              </Button>
            </div>
          </div>

          <Badge
            title={'feature'}
            color={'text-secondary'}
            bgColor={'bg-layer-base'}
          />
        </div>

        <div className=' mt-3 lg:hidden flex justify-between items-center'>
          <Highlight
            variant='horizontal'
            size='large'
            className=' flex w-fit flex-row justify-center h-18 mt-2'
          >
            <ArrowUpIcon width={14} height={14} color='#4661E6' />
            {25}
          </Highlight>

          <Button variant={'link'} className='flex gap-x-4'>
            <CommentsIcon width={18} height={16} color='#CDD2EE' />
            {10}
          </Button>
        </div>
      </div>

      <div className='mt-5 rounded-[10px] bg-white p-6 lg:p-8 '>
        <h2>4 Comments</h2>

        <div className='flex'>{/* need to complet */}</div>
      </div>

      <div className='mt-5 rounded-[10px] bg-white p-6 lg:p-8 '>
        <h2>Add Comment</h2>

        <textarea
          className={'text-lg px-3 py-2 rounded-[10px] w-full my-2'}
          rows={3}
        />

        <div className='flex justify-between items-center'>
          <p className='text-md'>255 charector left</p>
          <Button>Post Comment</Button>
        </div>
      </div>
    </Container>
  );
};

export default View;
