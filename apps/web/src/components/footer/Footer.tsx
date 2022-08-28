import React from 'react'
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';

import Button from '../buttons/Button';
import ButtonLink from '../links/ButtonLink';
import UnstyledLink from '../links/UnstyledLink'

export const Footer = () => {
  return (
    <div className='px-10 py-10 bg-darkBg text-gray-300'>
      <div className="x-container-fluid w-100 flex flex-col gap-5 divide-y-2 divide-gray-800">
        <div className="top-footer flex flex-col items-center gap-12 py-10">
          <h1 className=''>
            <span className='text-primary-400'>Start your innovation</span> today with cloud
          </h1>
          <div className="flex items-center gap-7">
            <span>Take first step right now</span>
            <ButtonLink href='#' className='py-[.7rem] px-10 font-normal rounded-none'  variant='primary'>Get started</ButtonLink>
          </div>
        </div>

        <div className="middle-footer flex items-start justify-center py-10">
          <div className="middle-right text-sm flex flex-col gap-5">
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
              <UnstyledLink className='hover:text-primary-500' href='#'>
                <FaFacebookF fontSize={17} />
              </UnstyledLink>
              <UnstyledLink className='hover:text-primary-500' href='#'>
                <FaTwitter fontSize={17} />
              </UnstyledLink>
              <UnstyledLink className='hover:text-primary-500' href='#'>
                <FaInstagram fontSize={17} />
              </UnstyledLink>
              <UnstyledLink className='hover:text-primary-500' href='#'>
                <FaLinkedinIn fontSize={17} />
              </UnstyledLink>
              <UnstyledLink className='hover:text-primary-500' href='#'>
                <FaYoutube fontSize={17} />
              </UnstyledLink>
              <UnstyledLink className='hover:text-primary-500' href='#'>
                <FaDiscord fontSize={17} />
              </UnstyledLink>
            </div>
          </div>
          <div className="middle-left flex items-start justify-center gap-20 flex-1 ml-3 border-l-[1px] border-gray-300">
            <div className="flex flex-col gap-4">
              <p className='text-primary-400 font-medium'>Why Icloudeng</p>
              <div className='flex flex-col text-sm text-gray-400 gap-2'>
                <UnstyledLink href='#' className='hover:text-gray-300'>Choosing Icloudeng</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Whitepapers</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Blog</UnstyledLink>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className='text-primary-400 font-medium'>Products</p>
              <div className='flex flex-col text-sm text-gray-400 gap-2'>
                <UnstyledLink href='#' className='hover:text-gray-300'>Choosing Icloudeng</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Whitepapers</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Blog</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className='text-primary-400 font-medium'>Solutions</p>
              <div className='flex flex-col text-sm text-gray-400 gap-2'>
                <UnstyledLink href='#' className='hover:text-gray-300'>Choosing Icloudeng</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Whitepapers</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Blog</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className='text-primary-400 font-medium'>Resources</p>
              <div className='flex flex-col text-sm text-gray-400 gap-2'>
                <UnstyledLink href='#' className='hover:text-gray-300'>Choosing Icloudeng</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Whitepapers</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Blog</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className='text-primary-400 font-medium'>About</p>
              <div className='flex flex-col text-sm text-gray-400 gap-2'>
                <UnstyledLink href='#' className='hover:text-gray-300'>Choosing Icloudeng</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Open cloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Multicloud</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Global infrastructure</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Customers and case study</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Analyst reports</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Whitepapers</UnstyledLink>
                <UnstyledLink href='#' className='hover:text-gray-300'>Blog</UnstyledLink>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-44 px-10 py-10">
          <div className="flex flex-col items-center gap-4">
            <p className='text-2xl font-bold'>Join our mailing list</p>
            <p className='text-xs max-w-md text-center uppercase font-extralight'>Sign up to receive updates on new product announcements, Gift ideas, special promotions, sales and more</p>
          </div>
          <form className="flex items-center gap-5">
            <input placeholder='Enter your email' className='border-none font-extralight bg-transparent ring-1 ring-primary-400 rounded-sm h-12 w-[20rem] px-2 font-base outline-none focus:ring-2' />
            <Button type='button' className='py-[.7rem] px-8 font-light bg-primary-400 rounded-sm hover:bg-primary-500'>Subscribe</Button>
          </form>
        </div>

        <div className="flex items-center space-x-32 pt-10">
          <div className="bottom-footer flex items-center divide-x-2">
            <span className='px-2 text-xs'>&#169; 2021-2022 <UnstyledLink href='#'>Cloud IT Engineering LTD.</UnstyledLink></span>
            <UnstyledLink href='#' className='px-2 text-xs'>Terms of services</UnstyledLink>
            <UnstyledLink href='#' className='px-2 text-xs'>privacy</UnstyledLink>
            <UnstyledLink href='#' className='px-2 text-xs'>Use of Cookies</UnstyledLink>
          </div>
          <span className="flex items-center gap-7">
            <FaCcMastercard fontSize={22} />
            <FaCcVisa fontSize={22} />
            <FaCcPaypal fontSize={22} />
          </span>
        </div>
      </div>
    </div>
  )
}
