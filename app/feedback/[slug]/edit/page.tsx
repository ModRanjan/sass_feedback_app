'use client';

import { useRouter } from 'next/navigation';
import EditFeedBackIcon from '@/design-system/Atom/Icons/EditFeedBackIcon';

const Edit = () => {
  const router = useRouter();
  const createFeedbackHandler = async () => {
    alert('Feedback Added');
  };

  return (
    <div className='create-feedback'>
      <div className='new-feedback-icon'>
        <EditFeedBackIcon />{' '}
      </div>

      <h3 className='create-feedback-title'>Create New Feedback</h3>

      <form className='feedback-form' onSubmit={createFeedbackHandler}>
        <div>
          <label htmlFor='feedback-title'>
            Feedback Title
            <p className='label-description'>
              Add a short, descriptive headline
            </p>
          </label>
          <input id='feedback-title' className='w-full rounded-md h-12 ' />
        </div>
        <div>
          <label className='body-3'>
            Category
            <p className='label-description'>
              Choose a category for your feedback
            </p>
          </label>

          <select className='select-feature'>
            <option>Feature</option>
            <option> UI</option>
            <option> UX</option>
            <option>Enhancement</option>
            <option>Bug</option>
          </select>
        </div>

        <div>
          <div>
            <label className='body-3'>
              Feedback Detail
              <p className='label-description'>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </label>
            <textarea className='textarea' rows={3} />
          </div>
        </div>
        <div className='feedback-footer'>
          <button
            type='button'
            className='btn btn--tertiary'
            onClick={() => router.push('/')}
          >
            Cancel
          </button>
          <button className='btn btn--primary' type='submit'>
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
