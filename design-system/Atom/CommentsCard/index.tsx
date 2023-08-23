import Image from 'next/image';
import React from 'react';

type CommentsCardType = {
  avtarURL: string;
  name: string;
  profile: string;
  comment: string;
  replyHenader: () => void;
  reply: boolean;
};

const CommentsCard = ({
  avtarURL,
  name,
  profile,
  comment,
  replyHenader,
  reply,
}: CommentsCardType) => {
  return (
    <div className='comment-card'>
      <div className='left-container'>
        <Image
          className='avtar'
          src={avtarURL}
          alt={name}
          width={24}
          height={24}
          quality={100}
          priority
        />
      </div>

      <div className='comment-card-body'>
        <div className='comment-card-header'>
          <div>
            <h3>{name}</h3>
            <h4>{profile} </h4>
          </div>

          <button className='btn btn-reply' onClick={replyHenader}>
            Reply
          </button>
        </div>

        <p className='body-2'>{comment}</p>

        <div className={reply ? 'reply-container' : 'hidden'}>
          <textarea
            className='textarea'
            placeholder='Type your comment here'
            rows={4}
          />

          <button className='btn btn--primary'>Post Reply</button>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
