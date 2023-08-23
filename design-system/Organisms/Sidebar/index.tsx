'use client';

import { useEffect, useState } from 'react';

import { CrossIcon } from '@/design-system/Atom/Icons/CrossIcon';
import { Hamburger } from '@/design-system/Atom/Icons/Hamburger';

type RoadmapType = {
  roadmapHandler: () => void;
};

const Sidebar = ({ roadmapHandler }: RoadmapType) => {
  const [tags, setTags] = useState<string[]>([]);
  const [activeTag, setActiveTAg] = useState<string>('All');
  const [isDrowerOpen, setIsDrowerOpen] = useState(false);
  console.log('isDrowerOpen', isDrowerOpen);

  useEffect(() => {
    const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

    setActiveTAg('All');
    setTags(tags);
  }, []);

  return (
    <div className='sidebar'>
      <div className='header'>
        <div className='header-content'>
          <h2>Eqaim</h2>
          <p className='body-2'>Feedback Board</p>
        </div>

        {/* hamburger btn only appears in mobile view */}
        <button
          className='hamburger-btn'
          onClick={() => setIsDrowerOpen(!isDrowerOpen)}
        >
          {isDrowerOpen ? <CrossIcon /> : <Hamburger />}
        </button>
      </div>

      <div className='tags-container'>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`btn-interactive ${activeTag == tag && 'active'}`}
            onClick={() => setActiveTAg(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className='roadmap-overview'>
        <div className='head'>
          <h3>Roadmap</h3>

          <button onClick={roadmapHandler}>View</button>
        </div>

        <ul className={`roadmap-lists`}>
          <li className='body-1'>
            <p>Planned</p>
            <span>2</span>
          </li>
          <li className='body-1'>
            <p>In-Progress</p>
            <span>3</span>
          </li>
          <li className='body-1'>
            <p>Live</p>
            <span>1</span>
          </li>
        </ul>
      </div>

      {/* backdrop for mobile view */}
      <div
        className='backdrop'
        style={{ opacity: `${isDrowerOpen ? '0.5' : '0'}` }}
      ></div>
      <div
        className={
          isDrowerOpen ? 'sidebar-content' : 'sidebar-content-container'
        }
      ></div>
    </div>
  );
};

export default Sidebar;
