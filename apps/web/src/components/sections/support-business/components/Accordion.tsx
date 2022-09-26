import Skeleton from '@/components/Skeleton'
import React, { FunctionComponent, PropsWithChildren, useEffect, useRef, useState } from 'react'

export const Accordion: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const titles = React.Children.map(children, (node: any) => {
        const nprops = node?.props
        return {
            title: nprops?.title || '',
            description: nprops?.description || '',
        }
    })
    const newChildren = React.Children.map(children, (node: any, index) => {
        return React.cloneElement(node, {
            active: index === activeIndex
        })
    })

    useEffect(() => {
        React.Children.forEach(children, (node: any, index) => {
            if (node?.props?.active) {
                setActiveIndex(index)
            }
        })
    }, [])

    return (
        <div className="accordion__top-container pt-5 w-full">
            <div className="relative w-full accordion__main-container">
                <div className="relative w-full flex flex-col items-center">
                    <div className="accordion__list w-full flex-col-reverse sm:flex-row flex items-start gap-12">
                        <div className="accordion__list-contents w-full text-content flex-[1.3] flex flex-col items-start gap-7 sm:border-l-[1px]">
                            {titles?.map(({ title, description }, index) => {
                                const active = activeIndex === index
                                return <div key={index} className={`transition-all accordion__list-contents-texts w-full flex-1 ${active ? 'flex sm:border-l-[1px] border-primary-400' : 'sm:flex'} flex-col items-center sm:items-start gap-5 pl-7`}>
                                    <h3 onClick={() => setActiveIndex(index)} className={`transition-all cursor-pointer ${active ? 'text-black' : 'text-black/60'} hover:text-black`}>{title}</h3>
                                    <span className={`transition-all sm:max-w-sm text-center sm:text-start ${!active && 'hidden'}`}>
                                        {description}
                                    </span>
                                </div>
                            })}
                        </div>

                        <div className="image-container accordion__list-img-content sm:flex-[2] relative w-full h-[20rem]">
                            <div className="relative w-full h-full">
                                <Skeleton className=" absolute inset-0 bg-primary-50" />
                            </div>

                            {newChildren}
                        </div>
                    </div>
                </div>




                <div className="relative float-right mt-10">
                    <button
                        type='button'
                        onClick={() => { null }}
                        disabled={false}
                        className='absolute -left-[3.5rem] flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
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
                        className='absolute right-10 flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
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
    )
}


export function AccordionChild({ children, active }: PropsWithChildren<{ title: React.ReactNode, description?: React.ReactNode, active?: boolean }>) {
    return <div className={`transition-all ${!active ? 'invisible opacity-0' : ''} absolute inset-0`}>
        {children}
    </div>
}