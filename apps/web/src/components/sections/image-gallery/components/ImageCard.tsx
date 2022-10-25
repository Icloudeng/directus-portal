import Image, { StaticImageData } from "next/image"

type IImageCard = {
    imgLink: string | StaticImageData;
}

export const ImageCard = ({imgLink}:IImageCard) => {
  return (
    <div className="h-[28rem] sd:h-[32rem] md:h-[36rem] w-full shrink-0 grow-0 basis-full">
        <div className="relative w-full h-full">
            <Image
                className='image object-cover'
                src={imgLink}
                layout='fill'
                objectFit='contain'
                alt='logo image'
                loading='lazy'
            />
        </div>
    </div>
  )
}

// import Image, { StaticImageData } from "next/image"

// type IImageCard = {
//     imgLink: string | StaticImageData;
// }

// export const ImageCard = ({imgLink}:IImageCard) => {
//   return (
//     <div className="min-h-[32rem] shrink-0 grow-0 basis-full py-12 px-10 ss:px-12 sm:py-16 sm:px-24 shadow-sm rounded-sm">
//         {/* <div className="relative w-full h-full bg-green-300"> */}
//         <Image
//                 className='image object-cover'
//                 src={imgLink}
//                 layout='fill'
//                 objectFit='cover'
//                 alt='logo image'
//                 loading='lazy'
//             />
//         {/* </div> */}
//     </div>
//   )
// }
