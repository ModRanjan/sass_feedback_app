'use client';
import { useEffect, useState } from 'react';
import useWindowSize from '@/utils/hooks/WindowSize.jsx';
import classes from './RoadMapContent.module.css';
import Data from '@/config/data.json';
import FeedbackCard from '@/design-system/Atom/Cards';
import { ProductRequest } from '@/types/DataTypes';

export const RoadMapContent = () => {
  const [isMob, setIsMob] = useState(true);
  const [status, setStatus] = useState(0);
  const size = useWindowSize();
  const [statuses, setStatuses] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<ProductRequest[]>([]);
  const [plannedItems, setdItemsPlanne] = useState<ProductRequest[]>();
  const [itemsInProgress, setItemsInProgress] = useState<ProductRequest[]>();
  const [itemsLive, setItemsLive] = useState<ProductRequest[]>();

  useEffect(() => {
    if (size?.width > 650) setIsMob(false);
    else setIsMob(true);

    const uniqueStatuses = Array.from(
      new Set(Data.productRequests.map((request) => request.status))
    );

    const temp = uniqueStatuses.filter((status) => status !== 'suggestion');

    setStatuses(temp);
  }, [size]);

  useEffect(() => {
    if (isMob) {
      if (status === 0)
        setFilteredItems(
          Data.productRequests.filter((item) => item.status === 'planned')
        );
      else if (status === 1)
        setFilteredItems(
          Data.productRequests.filter((item) => item.status === 'in-progress')
        );
      else if (status === 2)
        setFilteredItems(
          Data.productRequests.filter((item) => item.status === 'live')
        );
    } else {
      const tempPlannedItem: ProductRequest[] = Data.productRequests.filter(
        (item) => item.status === 'planned'
      );
      const tempInProgressItem: ProductRequest[] = Data.productRequests.filter(
        (item) => item.status === 'in-progress'
      );
      const tempLiveItems: ProductRequest[] = Data.productRequests.filter(
        (item) => item.status === 'live'
      );

      setdItemsPlanne(tempPlannedItem);
      setItemsInProgress(tempInProgressItem);
      setItemsLive(tempLiveItems);
    }
  }, [isMob, status]);

  return (
    <>
      {/* RoadMapNavbar for smaller screen size  */}
      <div className={classes.RoadMapNavbar}>
        <div
          className={`${classes.navItem} ${
            status === 0 ? classes.active0 : ''
          }`}
          onClick={() => setStatus(0)}
        >
          <p>Planned (2)</p>
        </div>
        <div
          className={`${classes.navItem} ${
            status === 1 ? classes.active1 : ''
          }`}
          onClick={() => setStatus(1)}
        >
          <p>In-Progress (3)</p>
        </div>
        <div
          className={`${classes.navItem} ${
            status === 2 ? classes.active2 : ''
          }`}
          onClick={() => setStatus(2)}
        >
          <p>Live (1)</p>
        </div>
      </div>

      {/* headWrapper is only visible for bigger screens */}
      <div className='grid grid-cols-3 gap-4 space-x-4 mt-15'>
        {statuses &&
          statuses.map((status) => {
            return (
              <div className={`w-[calc(33.33% - 16px)] `}>
                <div className='flex flex-col'>
                  <h3 className='text-primary-lighter capitalize'>
                    {status} &#40;
                    {status === 'planned' && plannedItems?.length}
                    {status === 'in-progress' && itemsInProgress?.length}
                    {status === 'live' && itemsLive?.length}
                    &#41;
                  </h3>

                  <p className='text-md text-grey'>
                    Ideas prioritized for research
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className='grid grid-cols-3 gap-4 space-x-4 mb-15'>
        <div className='col-span-1'>
          {!isMob &&
            plannedItems &&
            plannedItems.map((item) => {
              return (
                <FeedbackCard
                  key={item.id}
                  data={item}
                  comments={item.comments?.length ?? 0}
                  borderColor='border-danger-lighter'
                />
              );
            })}
        </div>

        <div className='col-span-1'>
          {(!isMob || status === 3) &&
            itemsInProgress &&
            itemsInProgress.map((item) => {
              return (
                <FeedbackCard
                  key={item.id}
                  data={item}
                  comments={item.comments?.length ?? 0}
                  borderColor='border-tertiary'
                />
              );
            })}
        </div>

        <div className='col-span-1'>
          {!isMob &&
            itemsLive &&
            itemsLive.map((item) => {
              return (
                <FeedbackCard
                  key={item.id}
                  data={item}
                  comments={item.comments?.length ?? 0}
                  borderColor='border-secondary-lighter'
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
