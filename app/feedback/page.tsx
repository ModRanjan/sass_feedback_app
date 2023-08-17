const CreateFeedback = () => {
  return (
    <div className='relative mx-auto w-full lg:w-1/3 bg-white shadow-lg px-1 sm:px-5 py-5 mt-10 rounded-md font-sans'>
      <div className='absolute text-2xl left-10 -top-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='56'
          height='56'
          viewBox='0 0 56 56'
          fill='none'
        >
          <circle cx='28' cy='28' r='28' fill='url(#paint0_radial_0_2017)' />
          <path
            d='M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z'
            fill='white'
          />
          <defs>
            <radialGradient
              id='paint0_radial_0_2017'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(58.184 -5.81647) rotate(129.411) scale(93.4169)'
            >
              <stop stop-color='#E84D70' />
              <stop offset='0.530886' stop-color='#A337F6' />
              <stop offset='1' stop-color='#28A7ED' />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className='space-y-8 px-10 pt-8'>
        <div className=' font-jost text-xl font-bold text-[#3A4374]'>
          Create New Feedback
        </div>
        <div>
          <div className='text-[#3A4374] font-jost font-bold text-lg'>
            Feedback Title
          </div>
          <p className='text-[#647196] font-jost font-normal text-lg'>
            Add a short, descriptive headline
          </p>
          <input className='w-full rounded-md h-12 ' />
        </div>
        <div>
          <div className='text-[#3A4374] font-jost font-bold text-lg'>
            Category
          </div>
          <p className='text-[#647196] font-jost font-normal text-lg'>
            Choose a category for your feedback
          </p>
          <select className='w-full text-lg  h-20 px-5 bg-[#F7F8FD] rounded-md'>
            <option>Feature</option>
            <option> UI</option>
            <option> UX</option>
            <option>Enhancement</option>
            <option>Bug</option>
          </select>
        </div>
        <div>
          <div>
            <div className='text-[#3A4374] font-jost font-bold text-lg'>
              Feedback Detail
            </div>
            <p className='text-[#647196] font-jost font-normal text-[16px]'>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea className='w-full h-40' />
          </div>
        </div>
        <div className='space-x-5 text-end'>
          <button className='w-40 h-10 bg-[#3A4374] text-lg text-[#F2F4FE] rounded-lg'>
            Cancel
          </button>
          <button className='w-60 h-10  text-lg text-[#F2F4FE]  bg-[#AD1FEA] rounded-lg'>
            Add Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedback;
