import ButtonLink from "@/components/ui/links/ButtonLink"

import { TabVideo } from "./components/TabVideo"

export const QuickTutorials = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                <h1 className='text-center'>Quick Start Tutorials</h1>
                <span className='max-w-xl text-center'>
                    Learn the basics, or refine your skills with tutorials designed to speed up your video making.
                </span>
                {/* <ButtonLink href="#">Quick Start</ButtonLink> */}
            </div>
            <TabVideo />
        </div>
    )
}
