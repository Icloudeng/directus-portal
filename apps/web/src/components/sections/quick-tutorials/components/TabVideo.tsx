import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player"

import { useHasMounted } from "@/app/hooks/useHasMounted";

import Button from "@/components/ui/buttons/Button";
import Skeleton from "@/components/ui/Skeleton";

import { TabButtonData } from "@/app/models/tabButtonModel";

import { ITabButtonData } from "@/types/tabVideoTypes";


export const TabVideo = () => {
    const { mounted } = useHasMounted();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const tabData = useRef(
        () => document.querySelectorAll('.btn-tab-direction')
    );
    const [tabBigData, setTabBigData] = useState<ITabButtonData>(TabButtonData[activeIndex])

    useEffect(() => {
        const element = Array.from(tabData.current()).at(activeIndex)
        element?.classList.add('btn-tab-active')

        setTabBigData(TabButtonData[activeIndex])
    }, [activeIndex])

    const handleBtnClick = (tabCardEl: ITabButtonData, index: number) => {
        // const elements = Array.from(tabData.current())
        // elements.forEach((val: any) => {
        //     val.classList.remove('btn-tab-active')
        // })

        tabData.current().forEach((val: any) => {
            val.classList.remove('btn-tab-active')
        })

        // elements.at(index)?.classList.add('btn-tab-active')
        tabData.current()[index].classList.add('btn-tab-active')
        setActiveIndex(index)
        setTabBigData(tabCardEl)
    }


    return (
        <div className="w-full flex flex-col items-center gap-5">
            {/* <h2>Getting Started</h2> */}
            <div className="tab-container flex items-center px-10 gap-3 mb-3 flex-wrap justify-center">
                {
                    TabButtonData.map(({ btnTitle, cardTitle, cardDescription, videoLink }, index) => (
                        <Button
                            key={index}
                            onClick={() => handleBtnClick({ btnTitle, cardTitle, cardDescription, videoLink }, index)}
                            className='btn-tab-direction py-3 font-semibold rounded-md border-none bg-[#f5f7fa] text-dark hover:bg-primary-400'>
                            {btnTitle}
                        </Button>
                    ))
                }
            </div>
            <div className='w-full p-7 bg-[#f5f7fa] rounded-3xl'>
                <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                    <h3 className='text-center'>{tabBigData.cardTitle}</h3>
                    <span className='max-w-xl text-center'>
                        {tabBigData.cardDescription}
                    </span>
                </div>
                <div className="video-wrapper w-full ">
                    <div className="video-container relative w-full h-[18rem] xs:h-[22rem] sd:h-[28rem] md:h-[31rem] lg:h-[37rem] z-[1]">
                        <Skeleton className="absolute inset-0 text-primary-500 rounded-xl -z-[1]" />
                        {
                            mounted &&
                            <ReactPlayer
                                url={tabBigData.videoLink}
                                // light
                                width='100%'
                                height='100%'
                            />

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
