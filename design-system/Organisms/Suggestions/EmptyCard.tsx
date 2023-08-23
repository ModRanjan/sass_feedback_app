const EmptyCard = () => {
  return (
    <div className='emptyCard'>
      <div className='wrapper'>
        <img src='/assets/suggestions/illustration-empty.svg' alt='empty' />
        <p className='emptyHeading'>There is no feedback yet.</p>
        <p className='textSecondary'>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button>+ Add Feedback</button>
      </div>
    </div>
  );
};

export default EmptyCard;
