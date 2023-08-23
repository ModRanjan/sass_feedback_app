'use client';
import { useRouter } from 'next/navigation';
import ArrowLeftIcon from '@/design-system/Atom/Icons/ArrowLeftIcon';
import NewFeedbackIcon from '@/design-system/Atom/Icons/NewFeedbackIcon';

const CreateFeedback = () => {
  const router = useRouter();
  const createFeedbackHandler = async () => {
    alert('Feedback Added');
  };

  return (
    <div className='create-feedback-container'>
      <div className='feedback-header'>
        <button className='btn back-btn' onClick={() => router.push('/')}>
          <span className='-ml-4'>
            <ArrowLeftIcon width={10} height={10} color='#4661E6' />
          </span>

          <span className='text-grey'>Go back</span>
        </button>
      </div>
      <div className='create-feedback'>
        <div className='new-feedback-icon'>
          <NewFeedbackIcon />
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
                  Include any specific comments on what should be improved,
                  added, etc.
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
    </div>
  );
};

export default CreateFeedback;
