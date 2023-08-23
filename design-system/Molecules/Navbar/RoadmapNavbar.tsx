import ArrowLeftIcon from '@/design-system/Atom/Icons/ArrowLeftIcon';

type RoadmapNavbarType = {
  feedbackHandler: () => void;
  goBackHandler: () => void;
};

const RoadmapNavbar = ({
  feedbackHandler,
  goBackHandler,
}: RoadmapNavbarType) => {
  return (
    <div className='roadmap-navbar'>
      <div className='nav-left-container'>
        <button className='btn nav-left-top' onClick={goBackHandler}>
          <ArrowLeftIcon color='#CDD2EE' />
          <p>Go Back</p>
        </button>
        <h1 className={'nav-left-bottom'}>Roadmap</h1>
      </div>

      <div className={'nav-right-container'}>
        <button className='btn btn--primary' onClick={feedbackHandler}>
          + Add Feedback
        </button>
      </div>
    </div>
  );
};

export default RoadmapNavbar;
