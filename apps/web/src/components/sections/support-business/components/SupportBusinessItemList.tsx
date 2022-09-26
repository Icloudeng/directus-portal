import Image from 'next/image';

import Skeleton from '@/components/Skeleton'

type IStBItemList = {
    accordion: {
        title: string;
        text: string;
        active: boolean;
        // onClick: (index:number) => void
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
                {/* <div className="relative w-full h-full">
                    <Skeleton className=" absolute inset-0 bg-primary-50" />
                </div> */}
                {/* {img.map(({ imgUlr, active }, index) => (
                    <Image
                        key={index}
                        className={`${!active && 'invisible opacity-0'} image object-cover`}
                        src={imgUlr}
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                ))} */}
            </div>

        </div>
    )
}


{/* <li className="accordion__list w-full flex-col-reverse sm:flex-row flex items-start gap-12">
    <div className="accordion__list-contents w-full text-content flex-[1.3] flex flex-col items-start gap-7 sm:border-l-[1px]">
        <div className="accordion__list-contents-texts w-full flex-1 flex flex-col items-center sm:items-start gap-5 sm:border-l-[1px] border-primary-400 pl-7">
            <h3 className="cursor-pointer sm:text-inherit text-black hover:text-black">Ultra-fast deploy</h3>
            <span className="sm:max-w-sm text-center sm:text-start">
                A control panel is designed within the Single Page Application architecture.
                After the first page has been loaded, all pages load instantly, without lag.
                Focus entirely on your project.
            </span>
        </div>
        <div className="hidden accordion__list-contents-texts sm:flex-1 sm:flex flex-col items-center sm:items-start gap-5 pl-7">
            <h3 className="cursor-pointer text-black/60 hover:text-black">Freeze Protection</h3>
            <span className="hidden sm:max-w-sm text-center sm:text-start">
                A control panel is designed within the Single Page Application architecture.
                After the first page has been loaded, all pages load instantly, without lag.
                Focus entirely on your project.
            </span>
        </div>
        <div className="hidden accordion__list-contents-texts flex-1 sm:flex flex-col items-center sm:items-start gap-5 pl-7">
            <h3 className="cursor-pointer text-black/60 hover:text-black">2FA guard</h3>
            <span className="hidden sm:max-w-sm text-center sm:text-start">
                A control panel is designed within the Single Page Application architecture.
                After the first page has been loaded, all pages load instantly, without lag.
                Focus entirely on your project.
            </span>
        </div>
    </div>
    <div className="img-content sm:flex-[2] relative w-full h-[20rem]">
        <Skeleton className="accordion__list-contents-img absolute inset-0 bg-primary-50" />
        <Skeleton className="accordion__list-contents-img hidden absolute inset-0 bg-red-50" />
        <Skeleton className="accordion__list-contents-img hidden absolute inset-0 bg-yellow-50" />
    </div>
</li> */}


{/* <div className="img-content sm:flex-[2] relative w-full h-[20rem]">
    {img.map(({ imgUlr, active }, index) => (
        <Skeleton key={index} className="accordion__list-contents-img absolute inset-0 bg-primary-50" />

    ))}
    <Skeleton className="accordion__list-contents-img hidden absolute inset-0 bg-red-50" />
    <Skeleton className="accordion__list-contents-img hidden absolute inset-0 bg-yellow-50" />
</div> */}