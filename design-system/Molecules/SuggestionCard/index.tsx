import { ArrowUpIcon } from '@/design-system/Atom/Icons/ArrowUpIcon';
import { CommentsIcon } from '@/design-system/Atom/Icons/CommentsIcon';

type SuggestionCardType = {
  likes: number;
  heading: string;
  tag: string;
  messagesCount: number;
  description: string;
  onClick?: () => void;
  upVoteHandler: (value: number) => void;
};

export const SuggestionCard = ({
  likes,
  heading,
  tag,
  messagesCount,
  description,
  onClick,upVoteHandler
}: SuggestionCardType) => {
  return (
    <div className='suggestion-card'>
      <div className='left-container'>
        <button className='btn-interactive' onClick={()=>upVoteHandler(likes)}>
          <ArrowUpIcon />
          {likes}
        </button>
      </div>

      <div className='suggestion-card-body' onClick={onClick}>
        <h3 className='heading'>{heading}</h3>
        <p className='body-1'>{description} </p>
        <button className='btn badge'>{tag}</button>
      </div>

      <div className='right-container'>
        <button className='btn'>
          <CommentsIcon />
          <p className='body-1'>{messagesCount}</p>
        </button>
      </div>

      <div className={'suggestion-card-footer'}>
        <div className='left-container'>
          <button className='btn-interactive'>
            <ArrowUpIcon />
            <p className='body-1'>{likes}</p>
          </button>
        </div>

        <div className='right-container'>
          <button className='btn'>
            <CommentsIcon />
            <p className='body-1'>{messagesCount}</p>
          </button>
        </div>
      </div>
    </div>
  );
};
