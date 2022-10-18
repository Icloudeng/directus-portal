import Image from "next/image";

type IRectCard = {
    cardText?: string;
    cardLogo: string | any;
}

export const RectCard = ({ cardText, cardLogo }: IRectCard) => {
    return (
        <div className="flex items-center justify-center gap-2 bg-[#f5f7fa] shadow-md w-48 p-6 rounded-lg mr-8">
            <div className="relative w-7 h-7 rounded-sm">
                <Image
                    className="image object-cover"
                    src={cardLogo}
                    layout="fill"
                    objectFit="cover"
                    alt='hero banner image'
                    loading="lazy"
                />
            </div>
            <h3>{cardText? cardText : ''}</h3>
        </div>
    )
}
