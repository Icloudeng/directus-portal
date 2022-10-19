import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player"

import { useHasMounted } from "@/hooks/useHasMounted";

import Button from "@/components/ui/buttons/Button";
import Skeleton from "@/components/ui/Skeleton";

import { TabButton } from "./TabButton"

type ITabButtonData2 = {
    btnTitle: string;
    cardTitle: string;
    cardDescription: string;
    videoLink: string;
}

const TabButtonData = [
    'Getting Started', 'Media', 'Groups', 'Motion Presets', 'Publishing'
]

const TabButtonData2 = [
    {
        btnTitle: 'Getting Started',
        cardTitle: 'Cloud Computing',
        cardDescription: 'In this video we run through a quick overview of what is cloud computing.',
        videoLink: 'https://www.youtube.com/watch?v=mxT233EdY5c&ab_channel=AmazonWebServices'
    },
    {
        btnTitle: 'Media',
        cardTitle: 'Media',
        cardDescription: "In this video you'll learn how to import media, save media to your global libraries & use our stock integrations.",
        videoLink: 'https://www.youtube.com/watch?v=HYlQ0lYkA-I'
    },
    {
        btnTitle: 'Groups',
        cardTitle: 'Working with Groups',
        cardDescription: "In this video you'll learn how to create groups, mask groups & adjust the boundaries for groups.",
        videoLink: 'https://www.youtube.com/watch?v=ZUFjofxU0os'
    },
    {
        btnTitle: 'Motion Presets',
        cardTitle: 'Working with Motion Presets',
        cardDescription: "In this video you'll learn how to add animations to any layer with pre-built animations. You'll also discover how to create & save your own animations!",
        videoLink: 'https://www.youtube.com/watch?v=0sV3wi8mxkc'
    },
    {
        btnTitle: 'Publishing',
        cardTitle: 'Exporting & Render Queue',
        cardDescription: "In this video you'll learn how to export your videos, publish a specific frame as an image and how the render queue works.",
        videoLink: 'https://www.youtube.com/watch?v=G5bfQQrCo6U'
    },
    // 'Getting Started', 'Media', 'Groups', 'Motion Presets', 'Publishing'
]

export const TabVideo = () => {
    const { mounted } = useHasMounted();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const tabData = useRef(
        () => document.querySelectorAll('.btn-tab-direction')
    );
    const [tabBigData, setTabBigData] = useState<ITabButtonData2>(TabButtonData2[activeIndex])

    useEffect(() => {
        const element = Array.from(tabData.current()).at(activeIndex)
        element?.classList.add('btn-tab-active')
        setTabBigData(TabButtonData2[activeIndex])
    }, [activeIndex])

    const handleBtnClick = (tabCardEl: ITabButtonData2, index: number) => {
        const elements = Array.from(tabData.current())
        elements.forEach((val: any) => {
            val.classList.remove('btn-tab-active')
        })

        elements.at(index)?.classList.add('btn-tab-active')
        // tabData[index].classList.add('btn-tab-active')
        setActiveIndex(index)
        setTabBigData(tabCardEl)

        // console.log(index)
    }


    return (
        <div className="w-full flex flex-col items-center gap-5">
            {/* <h2>Getting Started</h2> */}
            <div className="tab-container flex items-center px-10 gap-3">
                {
                    TabButtonData2.map(({ btnTitle, cardTitle, cardDescription, videoLink }, index) => (
                        // <TabButton key={index} btnText={el} handleClick={() => handleBtnClick(index)} />
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
                    <div className="video-container relative w-full h-[37rem] z-[1]">
                        <Skeleton className="absolute inset-0 text-primary-500 rounded-xl -z-[1]" />
                        {
                            mounted &&
                            <ReactPlayer
                                url={tabBigData.videoLink}
                                // url='https://www.youtube.com/watch?v=GjPehgvSLH0'
                                // light
                                width='100%'
                                height='100%'
                            // style={{ pointerEvents: 'none', position: 'absolute' }}
                            />

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}