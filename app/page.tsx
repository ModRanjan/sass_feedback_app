import { Container } from '@/design-system/Atom/Container';

import Sidebar from '@/design-system/Organisms/Sidebar';
import RightSection from '@/design-system/Organisms/SuggestionContent';

export default function Home() {
  return (
    <Container>
      <div className='p-0 md:px-12 md:py-6 overflow-hidden'>
        <div className='flex gap-0 lg:gap-2 lg:gap-x-6 w-full gap-y-6 '>
          <div className='fixed top-0 lg:relative z-20 w-full md:max-w-7xl lg:max-w-lg'>
            <Sidebar />
          </div>
          <div className='z-10 mt-11 lg:mt-0 md:mt-56 w-full lg:w-[calc(75% - 15px);]'>
            <RightSection />
          </div>
        </div>
      </div>
    </Container>
  );
}
