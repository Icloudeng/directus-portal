import { RectCard } from '@/components/ui/cards/RectCard';

import boxImg from '~/images/box.png';
import gitlabImg from '~/images/gitlab.png';
import parabolicImg from '~/images/parabolic.png';
import slackImg from '~/images/slack.png';

export const CrossCardAnimation = () => {
    return (
        <div className='py-10 flex flex-col items-center gap-10 overflow-x-hidden'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h1 className='text-center'>Our Customers</h1>
            </div>
            <div className="max-w-full flex flex-col gap-7">
                <div className="w-full flex items-end justify-end animate-streamleftmob sm:animate-streamleft">
                    <RectCard cardLogo={gitlabImg.src} cardText='Gitlab' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={boxImg.src} cardText='Whatfix' />
                    <RectCard cardLogo={parabolicImg.src} cardText='Parabol' />
                    <RectCard cardLogo={slackImg.src} cardText='Networking' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={gitlabImg.src} cardText='Gitlab' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={boxImg.src} cardText='Whatfix' />
                    <RectCard cardLogo={parabolicImg.src} cardText='Parabol' />
                    <RectCard cardLogo={slackImg.src} cardText='Networking' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={gitlabImg.src} cardText='Gitlab' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={boxImg.src} cardText='Whatfix' />
                    <RectCard cardLogo={parabolicImg.src} cardText='Parabol' />
                    <RectCard cardLogo={slackImg.src} cardText='Networking' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                </div>
                <div className="w-full flex items-start justify-start animate-streamrightmob sm:animate-streamright">
                    <RectCard cardLogo={parabolicImg.src} cardText='Parabol' />
                    <RectCard cardLogo={slackImg.src} cardText='Networking' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={gitlabImg.src} cardText='Gitlab' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={boxImg.src} cardText='Whatfix' />
                    <RectCard cardLogo={parabolicImg.src} cardText='Parabol' />
                    <RectCard cardLogo={slackImg.src} cardText='Networking' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={gitlabImg.src} cardText='Gitlab' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                    <RectCard cardLogo={boxImg.src} cardText='Whatfix' />
                    <RectCard cardLogo={parabolicImg.src} cardText='Parabol' />
                    <RectCard cardLogo={slackImg.src} cardText='Networking' />
                    <RectCard cardLogo={slackImg.src} cardText='Slack' />
                </div>
            </div>
        </div>
    )
}
