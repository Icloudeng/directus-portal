import Button from '@/components/ui/buttons/Button'
import UnstyledLink from '@/components/ui/links/UnstyledLink'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { GiMoebiusStar } from 'react-icons/gi'

export const ReachOut = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                <h1 className='text-center'>Reach Out to Icloudeng</h1>
                <span className='max-w-xl text-center'>
                    Have questions? Fill out the form and our team will contact you shortly.
                </span>
            </div>
            <div className="max-w-4xl w-full flex items-center">
                <div className="left-side flex-[3]">
                    <ul className='flex flex-col gap-20 max-w-xs'>
                        <li className='relative flex items-center'>
                            <GiMoebiusStar className='absolute text-xl text-primary-400' />
                            {/* <AiOutlineStar className='absolute text-xl' /> */}
                            <h4 className='ml-12'>Get a technical expert consultation</h4>
                        </li>
                        <li className='relative flex items-center'>
                            <GiMoebiusStar className='absolute text-xl text-primary-400' />
                            <h4 className='ml-12'>Get a customized solution</h4>
                        </li>
                        <li className='relative flex items-center'>
                            <GiMoebiusStar className='absolute text-xl text-primary-400' />
                            <h4 className='ml-12'>Get a commercial offer</h4>
                        </li>
                    </ul>
                </div>
                <div className="right-side flex-[1.5] bg-[#f5f7fa] p-7">
                    <h4>Ask a question</h4>
                    <form action="">
                        <div className="formInputs flex flex-col gap-5 mt-7">
                            <input type="text" name="first_name" id="first_name-id" className="block w-full rounded-sm bg-gray-50 py-3 border-gray-300  px-4 focus:border-primary-400 focus:ring-primary-400 sm:text-sm" placeholder="Name" />
                            <input type="text" name="first_name" id="first_name-id" className="block w-full rounded-sm bg-gray-50 py-3 border-gray-300  px-4 focus:border-primary-400 focus:ring-primary-400 sm:text-sm" placeholder="Email" />
                            <textarea id="description-id" rows={4} name="description" className="block p-2.5 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-400 focus:border-primary-400" placeholder="Your message"></textarea>
                            <Button className='flex justify-center font-normal bg-primary-400 border-none rounded-none'>Send</Button>
                            <span className='text-xs text-center'>
                                By clicking on the button, you agree to the <UnstyledLink className='text-primary-500' href='#'>terms of service</UnstyledLink>
                            </span>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
