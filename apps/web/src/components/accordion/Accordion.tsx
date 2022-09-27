import React, { FunctionComponent, PropsWithChildren, useState } from 'react'

import { DotButton } from '@/components/carouselButtons/CarouselButtons';
import Skeleton from '@/components/Skeleton'

type Props = {
    defaultSelected?: React.Key;
    loader?: boolean;
    prev_next_buttons?: boolean;
}
export const Accordion: FunctionComponent<PropsWithChildren<Props>> = ({ children, defaultSelected, loader }) => {
    const arrChildren = React.Children.toArray(children)
    const defaultKey = defaultSelected ? '.$' + defaultSelected : (arrChildren[0] as React.ReactElement)?.key
    const [activeKey, setActiveKey] = useState(defaultKey)

    const titles = arrChildren.map((node: any) => {
        const nprops = node?.props
        return {
            title: nprops?.title || '',
            description: nprops?.description || '',
            key: node?.key
        }
    })

    const newChildren = arrChildren.map((node: any) => {
        return React.cloneElement(node, {
            active: node?.key === activeKey
        })
    })

    const indexOf = arrChildren.findIndex((node: any) => node?.key === activeKey)
    const hasPrev = indexOf > 0
    const hasNext = indexOf < (arrChildren.length - 1)

    const nextHandle = () => {
        const nextChild = arrChildren[indexOf + 1] as any
        if (nextChild) {
            setActiveKey(nextChild?.key)
        }
    }
    const prevHandle = () => {
        const prevChild = arrChildren[indexOf - 1] as any
        if (prevChild) {
            setActiveKey(prevChild?.key)
        }
    }


    return (
        <div className="accordion__top-container pt-5 w-full">
            <div className="relative w-full accordion__main-container">
                <div className="relative w-full flex flex-col items-center">
                    <div className="accordion__list w-full flex-col-reverse sm:flex-row flex items-start gap-12">
                        <div className="accordion__list-contents w-full text-content flex-[1.3] flex flex-col items-start gap-7 sm:border-l-[1px]">
                            {titles?.map(({ title, description, key }) => {
                                const active = activeKey === key
                                return <div key={key} className={`transition-all accordion__list-contents-texts w-full flex-1 ${active ? 'flex sm:border-l-[1px] border-primary-400' : 'hidden sm:flex'} flex-col items-center sm:items-start gap-5 pl-7`}>
                                    <h3 onClick={() => setActiveKey(key)} className={`transition-all cursor-pointer ${active ? 'text-black' : 'text-black/60'} hover:text-black`}>{title}</h3>
                                    <span className={`transition-all sm:max-w-sm text-center sm:text-start ${!active && 'hidden'}`}>
                                        {description}
                                    </span>
                                </div>
                            })}
                        </div>

                        <div className="image-container accordion__list-img-content sm:flex-[2] relative w-full min-h-[20rem]">
                            {loader && (
                                <div className="relative w-full h-full">
                                    <Skeleton className="absolute inset-0 bg-primary-50" />
                                </div>
                            )}

                            {newChildren}
                        </div>
                    </div>
                </div>

                <div className="w-full flex sm:hidden items-center justify-between ss:justify-evenly float-right mt-10">
                    <button
                        type='button'
                        onClick={prevHandle}
                        disabled={!hasPrev}
                        className='flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
                        data-carousel-next=''>
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-1 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none ${!hasPrev && 'ring-gray-200 '}`}>
                            <svg aria-hidden='true' className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6 ${!hasPrev && 'text-gray-200 '}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
                            </svg>
                            <span className='sr-only'>Previous</span>
                        </span>
                    </button>

                    {/* <!-- Slider indicators --> */}
                    <div className='flex space-x-3'>
                        {titles?.map(({ key }) => {
                            return <DotButton key={key} position={key} selected={activeKey === key} onClick={() => setActiveKey(key)} />
                        })}
                    </div>

                    <button
                        type='button'
                        onClick={nextHandle}
                        disabled={!hasNext}
                        className='flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
                        data-carousel-prev=''>
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-1 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none ${!hasNext && 'ring-gray-200 '}`}>
                            <svg aria-hidden='true' className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6 ${!hasNext && 'text-gray-200 '}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                            </svg>
                            <span className='sr-only'>Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export function AccordionChild({ children, ...props }: PropsWithChildren<{ title: React.ReactNode, description?: React.ReactNode }>) {
    const { active } = props as any
    return <div className={`transition-all ${!active ? 'hidden' : ''}`}>
        {children}
    </div>
}
