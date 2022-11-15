import { AllCategoryCads } from './components/AllCategoryCads';
import { CategoryElementsHeader } from './components/CategoryElementsHeader';

export const PlatformCategory = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='w-full flex flex-col items-center justify-center gap-7 mb-7'>
        <div className='max-w-3xl w-full'>
          <CategoryElementsHeader />
        </div>

        <div className='w-full'>
          <AllCategoryCads />
        </div>
      </div>
    </div>
  );
};
