import Image from 'next/legacy/image'

import Button from '@/components/ui/buttons/Button';
import UnstyledLink from '@/components/ui/links/UnstyledLink';

import logo from '~/images/icloudenglogo.png';

export const FooterTwo = () => {
    return (
        <footer className="sm:px-10 py-10 text-gray-300 z-0 bg-[#313b4d]">
            <div className='x-container-fluid flex flex-col gap-5 divide-y-2 divide-gray-800'>
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-primary-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">First Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Second Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Third Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Fourth Link</UnstyledLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-primary-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">First Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Second Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Third Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Fourth Link</UnstyledLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-primary-400 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">First Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Second Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Third Link</UnstyledLink>
                                </li>
                                <li>
                                    <UnstyledLink href='#' className="text-gray-400 hover:text-gray-300">Fourth Link</UnstyledLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-primary-400 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-transparent bg-opacity-50 rounded border border-primary-400 focus:bg-transparent focus:ring-1 focus:ring-primary-400 focus:border-primary-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <Button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-primary-400 border-0 py-3 px-6 focus:outline-none hover:bg-primary-500 rounded-sm">Subscribe</Button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                                <br className="lg:block hidden" />waistcoat green juice
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 bg-opacity-50">
                    <div className="container px-5 p-6 mx-auto flex items-center sm:flex-row flex-col">
                        <UnstyledLink href='#' className="flex title-font font-medium items-center md:justify-start justify-center text-primary-400">
                            <div className="relative w-12">
                                <Image objectFit="fill" className="absolute" src={logo} alt='logo' />
                            </div>
                            {/* <span className="ml-3 text-xl">Cloud Engineering</span> */}
                        </UnstyledLink>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                            <UnstyledLink href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">© 2021-2022 Cloud IT Engineering LTD.</UnstyledLink>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <UnstyledLink href='#' className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </UnstyledLink>
                            <UnstyledLink href='#' className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </UnstyledLink>
                            <UnstyledLink href='#' className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </UnstyledLink>
                            <UnstyledLink href='#' className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </UnstyledLink>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
