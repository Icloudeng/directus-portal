import { Truster } from './components/Truster'

import surabooks from '~/images/surabooks.webp'
import ecom from '~/images/ecom.webp'
import riskapp from '~/images/riskapp.webp'
import techsolvo from '~/images/techsolvo.webp'
import itgold from '~/images/itgold.webp'


export const TrustMatters = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12 overflow-auto'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                <h1 className='text-center'>Your trust matters to us</h1>
            </div>
            <div className="relative flex items-center justify-center flex-wrap gap-20 lg:gap-32">
                <Truster logoLink={surabooks} />
                <Truster logoLink={ecom} />
                <Truster logoLink={riskapp} />
                <Truster logoLink={techsolvo} />
                <Truster logoLink={itgold} />
            </div>
        </div>
    )
}
