

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
                <div className="w-full flex items-end justify-end animate-streamleft">
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
                <div className="w-full flex items-start justify-start animate-streamright">
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

            {/* <div className="flex flex-col gap-3">
                <h4>Salesforce</h4>
                <div className="grid grid-cols-4 gap-5">
                    <SquareCard cardText='SAP FI' linkUrl='#' />
                    <SquareCard cardText='SAP CO' linkUrl='#' />
                    <SquareCard cardText='SAP MM' linkUrl='#' />
                    <SquareCard cardText='SAP AD' linkUrl='#' />
                    <SquareCard cardText='SAP PP' linkUrl='#' />
                    <SquareCard cardText='SAP SD' linkUrl='#' />
                    <SquareCard cardText='SAP HR' linkUrl='#' />
                    <SquareCard cardText='SAP PM' linkUrl='#' />
                    <SquareCard cardText='SAP PP' linkUrl='#' />
                    <SquareCard cardText='SAP SD' linkUrl='#' />
                    <SquareCard cardText='SAP HR' linkUrl='#' />
                    <SquareCard cardText='SAP PM' linkUrl='#' />
                </div>
            </div> */}
        </div>
    )
}
