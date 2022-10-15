import PrimaryLink from '@/components/links/PrimaryLink'

import { FixedPlan } from "../pricing/FixedPlan"
import { FlexiblePlan } from "../pricing/FlexiblePlan"
import { Servers } from "../pricing/Servers"

type IHTagHeader = {
    tagTitle: string;
    sectionTitle: string;
    description?: string;
    learnMoreLink: string;
    parentUrl:string
}

export const HTagBodyContent = ({ tagTitle, sectionTitle, description, learnMoreLink, parentUrl }: IHTagHeader) => {
    return (
        <div id={`htag-${parentUrl}`} className='content-section flex flex-col gap-10'>
            <div className="header--container">
                <div className='section__header max-w-2xl space-y-5'>
                    <div className='header__title space-y-1'>
                        <span className="text-[0.7rem] uppercase text-slate-500">{tagTitle}</span>
                        <h3>{sectionTitle}</h3>
                    </div>
                    <p className='header__description'>
                        {description}.{' '}
                        <PrimaryLink className='inline' href={learnMoreLink}>Learn more</PrimaryLink>
                    </p>
                </div>
            </div>
            <div className="content-container">
              < FlexiblePlan />
            </div>
        </div>
    )
}
