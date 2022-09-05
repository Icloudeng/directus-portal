import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';

import UnstyledLink from '@/components/links/UnstyledLink';

import { SocialMedia } from './SocialMedia';


const socialMediaData = [
    { href: '#', icon: <FaFacebookF fontSize={17} /> }, { href: '#', icon: <FaTwitter fontSize={17} /> },
    { href: '#', icon: <FaInstagram fontSize={17} /> }, { href: '#', icon: <FaYoutube fontSize={17} /> },
    { href: '#', icon: <FaDiscord fontSize={17} /> }, { href: '#', icon: <FaLinkedinIn fontSize={17} /> }
]


export const ContactSection = () => {
    return (
        <div className="middle-right text-sm flex-1 flex flex-col gap-5">
            <p className='max-w-[24rem] mb-3'>A leading global provider of cloud computing solutions and services for business of all size</p>
            <p className='font-bold uppercase underline underline-offset-8'>Contact Us :</p>
            <div className='flex flex-col gap-5'>
                <span className='text-primary-400'>Monday to Friday, 9am to 6pm</span>
                <div className='space-y-4'>
                    <div className=' space-y-1'>
                        <p>KG 768st - Kigali/Rwanda</p>
                        <p className=' font-light text-gray-400'>Support: +(250) 000-000-000</p>
                    </div>
                    <div className=' space-y-1'>
                        <p>Paris 222 Etoile - France</p>
                        <p className=' font-light text-gray-400'>Support: +(33) 000-000-000</p>
                    </div>
                </div>
                <span>Local call rate</span>
            </div>
            <div className='flex items-center gap-2 mt-3'>
                <GoMailRead fontSize={20} />
                <span>
                    <UnstyledLink className='hover:text-primary-400' href='mailto:support@icloudeng.com'>support@icloudeng.com</UnstyledLink>
                </span>
            </div>
            <div className='flex items-center gap-5 text-primary-400 mt-1'>
                {socialMediaData.map(({ href, icon }, i) => (
                    <SocialMedia key={i} href={href} icon={icon} />
                ))}
            </div>
        </div>
    )
}
