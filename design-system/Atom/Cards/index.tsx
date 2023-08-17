import { FC } from 'react';

import Badge from '../Badge';
import { ArrowUpIcon } from '../Icons/ArrowUpIcon';
import { Button, Highlight } from '@/design-system/Atom/Button';
import { CommentsIcon } from '../Icons/CommentsIcon';
import { ProductRequest } from '@/types/DataTypes';

interface IFeedbackCardProps {
  borderColor: string;
  data: ProductRequest;
  comments: number;
}

const FeedbackCard: FC<IFeedbackCardProps> = ({
  data,
  borderColor,
  comments,
}) => {
  return (
    <div
      className={`w-[calc(33.33% - 20px)] mt-5 overflow-hidden bg-white border-t-4 rounded-md ${borderColor} p-3 lg:p-5`}
    >
      <div className='flex flex-col gap-y-2'>
        <div className='flex flex-col gap-x-4'>
          <div className='flex items-center gap-x-4'>
            <span className='bg-danger-lighter rounded-full w-[8px] h-[8px] inline-block'></span>
            <p className='text-md text-grey capitalize'>{data.status}</p>
          </div>
          <h3 className='text-primary-lighter'>{data.title}</h3>
        </div>

        <p className='  text-grey'>{data.description}</p>

        <Badge
          title={data.category}
          color={'text-secondary'}
          bgColor={'bg-layer-base'}
        />
      </div>

      <div className='flex items-center justify-between mt-3'>
        <Highlight size={'small'} className=''>
          <ArrowUpIcon width={10} height={7} color='#4661E6' />
          {data.upvotes}
        </Highlight>

        <Button variant={'link'} className=''>
          <CommentsIcon width={18} height={16} color='#CDD2EE' />
          {comments}
        </Button>
      </div>
    </div>
  );
};

export default FeedbackCard;
