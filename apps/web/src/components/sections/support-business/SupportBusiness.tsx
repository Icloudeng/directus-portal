import Skeleton from "@/components/Skeleton"

export const SupportBusiness = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h1 className='text-center'>How easy is cloud computing with Us</h1>
                <span className='max-w-xl text-center'>
                    Cloud computing provides a way for your business to manage your
                    computing resources online by providing it with
                    a flexible and global way of accessing data any where, any time.
                </span>
            </div>

            <div className="accordion__top-container pt-5 w-full">
                <div className="relative w-full accordion__main-container">
                    <ul className="w-full flex flex-col items-center">
                        <li className="accordion__list w-full flex items-start gap-12">
                            <div className="accordion__list-contents w-full text-content flex-[1.3] flex flex-col items-start gap-7 border-l-[1px]">
                                <div className="accordion__list-contents-texts w-full flex-1 flex flex-col items-start gap-5 border-l-[1px] border-primary-400 pl-7">
                                    <h3 className="cursor-pointer text-black hover:text-black">Ultra-fast deploy</h3>
                                    <span className="max-w-sm">
                                        A control panel is designed within the Single Page Application architecture.
                                        After the first page has been loaded, all pages load instantly, without lag.
                                        Focus entirely on your project.
                                    </span>
                                </div>
                                <div className="accordion__list-contents-texts flex-1 flex flex-col items-start gap-5 pl-7">
                                    <h3 className="cursor-pointer text-black/60 hover:text-black">Freeze Protection</h3>
                                    <span className="hidden max-w-sm">
                                        A control panel is designed within the Single Page Application architecture.
                                        After the first page has been loaded, all pages load instantly, without lag.
                                        Focus entirely on your project.
                                    </span>
                                </div>
                                <div className="accordion__list-contents-texts flex-1 flex flex-col items-start gap-5 pl-7">
                                    <h3 className="cursor-pointer text-black/60 hover:text-black">2FA guard</h3>
                                    <span className="hidden max-w-sm">
                                        A control panel is designed within the Single Page Application architecture.
                                        After the first page has been loaded, all pages load instantly, without lag.
                                        Focus entirely on your project.
                                    </span>
                                </div>
                            </div>
                            <div className="img-content flex-[2] relative w-full h-[20rem]">
                                <Skeleton className="accordion__list-contents-img absolute inset-0 bg-primary-50" />
                                <Skeleton className="accordion__list-contents-img hidden absolute inset-0 bg-red-50" />
                                <Skeleton className="accordion__list-contents-img hidden absolute inset-0 bg-yellow-50" />
                            </div>
                        </li>
                    </ul>
                    <div className="relative float-right mt-10">
                        <button
                            type='button'
                            onClick={() => { null }}
                            disabled={false}
                            className='absolute hidden -left-[3.5rem] ss:flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
                            data-carousel-prev=''
                        >
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-1 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none`}>
                                <svg aria-hidden='true' className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                                </svg>
                                <span className='sr-only'>Previous</span>
                            </span>
                        </button>

                        <button
                            type='button'
                            onClick={() => { null }}
                            disabled={true}
                            className='absolute hidden right-10 ss:flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
                            data-carousel-next=''
                        >
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-1 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none`}>
                                <svg aria-hidden='true' className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
                                </svg>
                                <span className='sr-only'>Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
