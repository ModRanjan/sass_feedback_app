import { Button } from '@/design-system/Atom/Button';
import ArrowDownIcon from '@/design-system/Atom/Icons/ArrowDownIcon';
import PlusIcon from '@/design-system/Atom/Icons/PlusIcon';
import classes from './Navbar.module.css';

const Navbar = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navLeft}>
        <img
          className={classes.navIcon}
          src='/assets/suggestions/icon-suggestions.svg'
          alt='suggestion icon'
        />

        <p className={classes.suggestionCount}>6 Suggestions</p>
        <div className={classes.dropdownBtnBox}>
          <p>Sort by :</p>
          <button>
            Most Upvotes
            {/* <img src='/assets/shared/icon-arrow-down.svg' alt='down icon' /> */}
            <ArrowDownIcon color='#fff' />
          </button>
        </div>
      </div>
      <div className={classes.navRight}>
        <Button variant={'primary'} onClick={onClick} className='gap-x-2'>
          <PlusIcon width={10} height={10} color='#F2F4FE' />
          Add Feedback
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
