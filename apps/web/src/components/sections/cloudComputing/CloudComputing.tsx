/* eslint-disable react/no-unescaped-entities */

import { Card } from "flowbite-react"

export const CloudComputing = () => {
    return (
        <div className="container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10">
            <h1>What's Cloud Computing</h1>
            <div className="slide-container">
                <div className="slide-content">
                    <div className="card-wrapper">
                        <div className="max-w-sm">
                            <Card
                                horizontal={true}
                                imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
