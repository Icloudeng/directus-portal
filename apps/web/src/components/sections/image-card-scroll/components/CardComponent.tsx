import Image from "next/image";

import { ISnapItem } from "@/types/intelligentSystemTypes";

export const CardComponent = (props:ISnapItem) => {
    const {imgLink, title, extraStyles} = props;

  return (
    <div className='snap-center w-full'>
            <div className={`relative flex-shrink-0 w-full overflow-hidden  ${extraStyles} scl transition-all duration-500`}>
                <Image src={imgLink} layout='fill' alt="" className='absolute inset-0 w-full h-full object-cover object-bottom' />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative min-h-[30rem] w-[100vw] ss:w-[70vw] md:w-[32rem] p-12 flex flex-col justify-between items-start">
                    <div className="flex items-center justify-center w-full px-4">
                        <h2 className="mb-3 text-center text-xl font-semibold tracking-tight text-white">
                            {title}
                        </h2>s
                    </div>
                </div>
            </div>
        </div>
  )
}
