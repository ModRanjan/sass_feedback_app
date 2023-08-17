'use client';

import { useState, useEffect } from 'react';

import classes from './Suggestion.module.css';

import useWindowSize from '@/utils/hooks/WindowSize.jsx';
import { ArrowUpIcon } from '@/design-system/Atom/Icons/ArrowUpIcon';
import { CommentsIcon } from '@/design-system/Atom/Icons/CommentsIcon';

type SuggestionCardType = {
  likes: number;
  heading: string;
  tag: string;
  messages?: number;
  description: string;
  onClick: () => void;
};

const SuggestionCard = ({
  likes,
  heading,
  tag,
  messages,
  description,
  onClick,
}: SuggestionCardType) => {
  const [isMob, setIsMob] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 650) setIsMob(false);
    else setIsMob(true);
  }, [isMob, size]);

  console.log(size);

  return !isMob ? (
    <div onClick={onClick} className={classes.card}>
      <div className={classes.cardLeft}>
        <button>
          {likes}
          <ArrowUpIcon width={10} height={7} color='#4661E6' />
        </button>
      </div>
      <div className={classes.cardBody}>
        <p className={classes.heading}>{heading}</p>
        <p className={classes.textSecondary}>{description} </p>
        <button>{tag}</button>
      </div>
      <div className={classes.cardRight}>
        <button>
          <CommentsIcon width={18} height={16} color='#CDD2EE' />
          <p>{messages}</p>
        </button>
      </div>
    </div>
  ) : (
    <div onClick={onClick} className={classes.card}>
      <div className={classes.cardBody}>
        <p className={classes.heading}>{heading}</p>
        <p className={classes.textSecondary}>{description} </p>
        <button>{tag}</button>
      </div>
      <div className={classes.cardLeft}>
        <button>
          <ArrowUpIcon width={14} height={14} color='#4661E6' />
          {likes}
        </button>
      </div>
      <div className={classes.cardRight}>
        <button>
          <CommentsIcon width={18} height={16} color='#CDD2EE' />
          <p>{messages}</p>
        </button>
      </div>
    </div>
  );
};

export default SuggestionCard;
