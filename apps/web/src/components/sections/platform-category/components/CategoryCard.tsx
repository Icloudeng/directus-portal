import Image from "next/image"
import { FaRegShareSquare } from "react-icons/fa"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

import UnstyledLink from "@/components/ui/links/UnstyledLink"

type ICategoryCard = {
  imgLink: string;
  title: string;
  text: string;
  cardColor: string;
  shareIconColor: string
  cardLink: string;
  cardWidth?: string
}

export const CategoryCard = ({ imgLink, title, text, cardColor, shareIconColor, cardLink, cardWidth }: ICategoryCard) => {
  return (
    <div className={`max-w-3xl w-full max-h-[25rem] h-[23rem] ${cardWidth} bg-white rounded-lg border border-gray-200 shadow-md`}>
      {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div> */}
      <UnstyledLink href={cardLink} style={{ backgroundColor: cardColor }} className="relative w-full h-full flex flex-col items-center rounded-lg overflow-hidden ">
        <Image
          className='image object-cover rounded-lg blur-[55px]'
          src={imgLink}
          layout="fill"
          objectFit="cover"
          alt='accordion image'
        />
        <div className="relative w-full h-1/2 flex-[1.5]">
          <Image
            className='image object-cover rounded-tl-lg rounded-tr-lg'
            src={imgLink}
            layout="fill"
            objectFit="cover"
            alt='accordion image'
          />
        </div>
        <div className="relative p-3 flex-1 max-h-[50%] overflow-hidden m-1">
          <h4 className=" font-bold tracking-tight text-white">{title}</h4>

          <p className="font-normal text-sm text-gray-200 text-ellipsis overflow-hidden p-1">{text}</p>
        </div>
      </UnstyledLink>
      <div className="absolute top-0 right-0 p-2 flex items-center gap-2">
        <span className="p-2 bg-white hover:bg-white/90 rounded-full cursor-pointer">
          <svg width="16" height="16"><path d="m10.12 10.83 4.03 4.02a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7l3.23 3.23a6.7 6.7 0 0 0-2.3 3.08l-.05.15-.01.06s-.08.5.35.61a.5.5 0 0 0 .61-.35L3 8.6a3.02 3.02 0 0 1 .2-.52c.16-.34.4-.8.78-1.26.3-.36.66-.72 1.13-1.02l1.57 1.58a2.5 2.5 0 1 0 3.45 3.45Zm-.74-.74a1.5 1.5 0 1 1-1.97-1.97l1.97 1.97Zm-3.06-5.9.85.86C7.43 5.02 7.71 5 8 5c2.04 0 3.29.91 4.03 1.82A5.7 5.7 0 0 1 13 8.6v.02a.5.5 0 0 0 .97-.25v-.02a2.3 2.3 0 0 0-.06-.18 6.7 6.7 0 0 0-1.12-1.98A5.95 5.95 0 0 0 8 4a6.9 6.9 0 0 0-1.68.2Z"></path></svg>
        </span>
        <span className="p-2 bg-white hover:bg-white/90 rounded-full cursor-pointer">
          <HiOutlineDotsHorizontal />
        </span>
      </div>
      <span style={{ backgroundColor: shareIconColor }} className="absolute bottom-2 right-2 p-2 rounded-full cursor-pointer">
        <FaRegShareSquare className="text-white" />
      </span>
    </div>
  )
}
