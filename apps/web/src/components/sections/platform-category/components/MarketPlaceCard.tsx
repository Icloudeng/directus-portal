import Image, { StaticImageData } from "next/image"

import ButtonLink from "@/components/ui/links/ButtonLink";

type IMarketPlaceCard = {
  itemLogo: string | StaticImageData;
  itemName: string;
  itemLink: string;
  description: string;
}

export const MarketPlaceCard = ({ itemLogo, itemLink, itemName, description }:IMarketPlaceCard) => {
  return (
    <div className="max-w-xs w-full max-h-[25rem] h-[22rem] bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="relative w-full h-full flex flex-col items-center rounded-lg overflow-hidden p-5">
        <div className="relative flex-[1] w-32 mb-3">
          <Image
            className='image object-cover rounded-tl-lg rounded-tr-lg'
            src={itemLogo}
            layout="fill"
            objectFit="cover"
            alt='accordion image'
          />
        </div>
        <div className="w-full flex-[1] overflow-hidden mb-2">
          <h3 className="text-primary-400 mb-2">{itemName}</h3>

          <p className="font-normal text-sm text-gray-500 tracking-tight">{description}</p>
        </div>
        <ButtonLink className="w-full flex justify-center" href={itemLink}>See details</ButtonLink>
      </div>
    </div>
  )
}
