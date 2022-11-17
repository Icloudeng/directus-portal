import Image from "next/legacy/image";

import Skeleton from '@/components/ui/Skeleton'

type IStBItemList = {
    accordion: {
        title: string;
        text: string;
        active: boolean;
    }[];
    img: {
        imgUlr: string;
        active: boolean;
    }[];
}

export const SupportBusinessItemList = (props: IStBItemList) => {
    const { accordion, img } = props;

    return (
        <div className="accordion__list w-full flex-col-reverse sm:flex-row flex items-start gap-12">
            <div className="accordion__list-contents w-full text-content flex-[1.3] flex flex-col items-start gap-7 sm:border-l-[1px]">
                {accordion.map(({ title, text, active }, index) => (
                    <div key={index} className={`accordion__list-contents-texts w-full flex-1 ${active ? 'flex sm:border-l-[1px] border-primary-400' : 'sm:flex'} flex-col items-center sm:items-start gap-5 pl-7`}>
                        <h3 onClick={() => {null}} className={`cursor-pointer ${active ? 'text-black': 'text-black/60'} hover:text-black`}>{title}</h3>
                        <span className={`sm:max-w-sm text-center sm:text-start ${!active && 'hidden'}`}>
                            {text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="image-container accordion__list-img-content sm:flex-[2] relative w-full h-[20rem]">
                <div className="relative w-full h-full">
                    <Skeleton className=" absolute inset-0 bg-primary-50" />
                </div>
                {img.map(({ imgUlr, active }, index) => (
                    <Image
                        key={index}
                        className={`${!active && 'invisible opacity-0'} image object-cover`}
                        src={imgUlr}
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                ))}
            </div>

        </div>
    )
}
