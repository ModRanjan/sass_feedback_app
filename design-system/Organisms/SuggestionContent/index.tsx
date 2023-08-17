'use client';

import classes from './Suggestion.module.css';
import { useRouter } from 'next/navigation';
import SuggestionCard from './SuggestionCard';

import Navbar from '../Navbar';
import suggestionData from './suggestionData.js';

const RightSection = () => {
  const router = useRouter();

  return (
    <div className={classes.rightContainer}>
      <Navbar onClick={() => router.push(`/feedback/`)} />
      <div className={classes.cardContainer}>
        {suggestionData.length > 0 ? (
          suggestionData.map((suggestion) => (
            <SuggestionCard
              key={suggestion.id}
              onClick={() => router.push(`/feedback/${suggestion.id}`)}
              likes={suggestion.likes}
              heading={suggestion.heading}
              tag={suggestion.tag}
              messages={suggestion.messages}
              description={suggestion.desc}
            />
          ))
        ) : (
          <SuggestionEmptyCard />
        )}
      </div>
    </div>
  );
};

export default RightSection;

const SuggestionEmptyCard = () => {
  return (
    <div className={classes.emptyCard}>
      <div className={classes.wrapper}>
        <img src='/assets/suggestions/illustration-empty.svg' alt='empty' />
        <p className={classes.emptyHeading}>There is no feedback yet.</p>
        <p className={classes.textSecondary}>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button>+ Add Feedback</button>
      </div>
    </div>
  );
};
