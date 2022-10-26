import { BiUser } from "react-icons/bi";

import { IReviewCard } from "@/types/reviewCardTypes";

export const ReviewCard = ({ review, reviewerName, reviewerPosition }:IReviewCard) => {
  return (
    <div className="min-h-[32rem] shrink-0 grow-0 basis-full bg-white py-12 px-10 ss:px-12 sm:py-16 sm:px-24 shadow-sm rounded-sm">
        <div className="w-full h-full flex flex-col items-center gap-16">
            <div className="text-center max-w-3xl">
                <q className="xs:text-lg font-light">{review}</q>
            </div>
            <div className=" flex flex-col items-center justify-center">
                {/* avatar */}
                <div className="p-4 bg-primary-50 rounded-full mb-4">
                    <BiUser className="text-primary-400" size='2.5rem' />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span>{reviewerName}</span>
                    <span className="font-light text-xs">{reviewerPosition}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
