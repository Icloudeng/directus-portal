import { ServerElement } from './components/ServerElement';

import box from '~/images/box.png';
import fingerprint from '~/images/fingerprint.png';
import gitlab from '~/images/gitlab.png';
import parabolic from '~/images/parabolic.png';
import slack from '~/images/slack.png';

export const FastServer = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                <h1 className='text-center'>Fast server response time</h1>
                <span className='max-w-xl text-center'>
                    Virtual servers are running as efficiently as possible with any WordPress plugins and themes.
                </span>
            </div>
            <div className="relative flex items-center gap-32">
                <ServerElement logoLink={box} text='Monstroid2' />
                <ServerElement logoLink={gitlab} text='Jetpack' />
                <ServerElement logoLink={slack} text='Yoast SEO' />
                <ServerElement logoLink={parabolic} text='Disqus Comments' />
                <ServerElement logoLink={fingerprint} text='WooCommerce' />
            </div>
        </div>
    )
}
