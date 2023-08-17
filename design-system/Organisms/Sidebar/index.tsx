'use client';
import { useState } from 'react';
import classes from './Suggestion.module.css';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

import { Highlight } from '@/design-system/Atom/Button';

const Sidebar = () => {
  const router = useRouter();
  const [isDrowerOpen, setIsDrowerOpen] = useState(false);

  return (
    <div className={classes.leftContainer}>
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <h2 className='text-white'>Eqaim</h2>
          <p>Feedback Board</p>
        </div>

        {/* hamburger btn only appears in mobile view */}
        <button
          className={classes.hamburgerbtn}
          onClick={() => setIsDrowerOpen(!isDrowerOpen)}
        >
          {isDrowerOpen ? (
            <img src='assets/shared/mobile/icon-close.svg' alt='hamburger' />
          ) : (
            <img
              src='/assets/shared/mobile/icon-hamburger.svg'
              alt='hamburger'
            />
          )}
        </button>
      </div>

      <div
        className={classes.leftContentContainer}
        style={{ right: `${isDrowerOpen ? 0 : '-271px'}` }}
      >
        <div className={classes.tagContainer}>
          {['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'].map((tag) => (
            <Highlight variant={'horizontal'} key={tag}>
              {tag}
            </Highlight>
          ))}
        </div>

        <div className={classes.roadMapOverview}>
          <div className={classes.head}>
            <p>Roadmap</p>
            <Link href='./roadmap'>View</Link>
          </div>
          <ul className={`${classes.list} ${classes.textSecondary}`}>
            <li>
              <span>Planned</span>
              <span>2</span>
            </li>
            <li>
              <span>In-Progress</span>
              <span>3</span>
            </li>
            <li>
              <span>Live</span>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>

      {/* backdrop for mobile view */}
      <div
        className={classes.backdrop}
        style={{ opacity: `${isDrowerOpen ? '0.5' : '0'}` }}
      ></div>
    </div>
  );
};

export default Sidebar;
