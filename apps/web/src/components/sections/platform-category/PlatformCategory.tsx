import { AllCategoryItems } from "./components/AllCategoryCards"
import { AllCategoryCads } from "./components/AllCategoryItems"
import { CategoryElementsHeader } from "./components/CategoryElementsHeader"
import { InputWithIcon } from "./components/InputWithIcon"
import { MarketPlaceCard } from "./components/MarketPlaceCard"

import dockerLogo from '~/images/docker.png';
import fingerprintLogo from '~/images/fingerprint.png';
import gitlabLogo from '~/images/gitlab.png';
import metricLogo from '~/images/metric.png';
import parabolicLogo from '~/images/parabolic.png';
import slackLogo from '~/images/slack.png';


export const PlatformCategory = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='w-full flex flex-col items-center justify-center gap-7 mb-7'>
        <h1 className='text-center'>Tutorials</h1>
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
            <h4 className="mb-5 hidden xl:block">Popular Topics</h4>
            <AllCategoryItems />
          </div>
          <div className="xl:flex-[3.7]">
            {/* <CategoryElementsHeader /> */}
            <div className="grid grid-cols-3 gap-3">
              <MarketPlaceCard
                itemLink="#"
                itemLogo={dockerLogo}
                itemName="Docker"
                description="With 1Password Business, you can automate many common administrative tasks using the 1Password SCIM bridge."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={gitlabLogo}
                itemName="Gitlab"
                description="Shorten development cycles and innovate faster with reliability through DevOps automation."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={slackLogo}
                itemName="Slack"
                description="Slack is a messaging program designed specifically for the office, but has also been adopted for personal use."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={metricLogo}
                itemName="Metric"
                description="The metric system is a system of measurement that succeeded the decimalised system based on the metre."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={fingerprintLogo}
                itemName="Fingerprint"
                description="A fingerprint is an impression left by the friction ridges of a human finger."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={parabolicLogo}
                itemName="Parabolic"
                description="Parabolic usually refers to something in a shape of a parabola, but may also refer to a parable. Parabolic may refer to: In mathematics:."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
