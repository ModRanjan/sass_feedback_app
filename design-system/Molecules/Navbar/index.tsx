import ArrowDownIcon from '@/design-system/Atom/Icons/ArrowDownIcon';
import PlusIcon from '@/design-system/Atom/Icons/PlusIcon';
import { SuggestionIcon } from '@/design-system/Atom/Icons/SuggestionIcon';

type NavbarType = {
  suggestionCount: number;
  upVoteHandler: (value: number) => void;
  feedbackHandler: () => void;
};

const Navbar = ({
  suggestionCount,
  upVoteHandler,
  feedbackHandler,
}: NavbarType) => {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <SuggestionIcon />

        <h3 className='suggestion-count'>{suggestionCount} Suggestions</h3>
        <button className='btn dropdown-btn' onClick={() => upVoteHandler()}>
          <p>Sort by :</p>
          Most Upvotes
          <ArrowDownIcon color='#fff' />
        </button>
      </div>

      <button onClick={feedbackHandler} className='btn btn--primary nav-btn'>
        <PlusIcon width={10} height={10} color='#F2F4FE' />
        <span>Add Feedback</span>
      </button>
    </div>
  );
};

export default Navbar;
