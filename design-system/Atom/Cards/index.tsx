import { FC } from 'react';

import { Badge } from '../Badge';
import { ArrowUpIcon } from '../Icons/ArrowUpIcon';
import { CommentsIcon } from '../Icons/CommentsIcon';
import { ProductRequest } from '@/typescript/DataTypes';

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
    <div className={`card`} style={{ borderTop: `4px solid ${borderColor}` }}>
      <div className="card-header">
        <div className="card-header-top">
          <span
            className="dot"
            style={{ backgroundColor: `${borderColor}` }}
          ></span>
          <p className="body-1">{data.status}</p>
        </div>
        <h3 className="card-header-bottom">{data.title}</h3>
      </div>

      <div className="card-body">
        <p className="body-1">{data.description}</p>

        <Badge title={data.category} />
      </div>

      <div className="card-footer flex items-center justify-between mt-3">
        <button className="btn btn-interactive">
          <ArrowUpIcon width={10} height={7} color="#4661E6" />
          {data.upvotes}
        </button>

        <button className="btn ">
          <CommentsIcon width={18} height={16} color="#CDD2EE" />
          {comments}
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
