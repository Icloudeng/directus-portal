import { AllCategoryItems } from "./components/AllCategoryCards"
import { AllCategoryCads } from "./components/AllCategoryItems"
import { CategoryElementsHeader } from "./components/CategoryElementsHeader"
import { InputWithIcon } from "./components/InputWithIcon"

export const PlatformCategory = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='w-full flex flex-col items-center justify-center gap-7 mb-7'>
        <h1 className='text-center'>Find a Solution</h1>
        <div className='max-w-xl  w-full text-center'>
          <InputWithIcon
            label="Search"
            icon={<svg aria-hidden="true" className="absolute inset-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>}
            btnText="search"
            withButton
          />
        </div>

        <div className="w-full flex flex-col xl:flex-row items-center xl:items-start gap-5 pt-7">
          <div className="w-full xl:flex-1 flex items-center justify-center xl:block p-3 xl:p-0 overflow-x-auto">
            <h4 className="mb-5 hidden xl:block">Solution categories</h4>
            <AllCategoryItems />
          </div>
          <div className="xl:flex-[3.7]">
            {/* <CategoryElementsHeader /> */}
            <AllCategoryCads />
          </div>
        </div>
      </div>
    </div>
  )
}
