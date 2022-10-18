import UnstyledLink from '@/components/links/UnstyledLink';

type ISquareCard = {
    cardText: string;
    linkUrl: string;
}

export const SquareCard = ({cardText, linkUrl}:ISquareCard) => {
  return (
    <div className="flex items-center justify-center gap-2 bg-[#f5f7fa] shadow-md w-[120px] h-[120px] p-2 rounded-lg transition-all hover:scale-110">
            <UnstyledLink href={linkUrl}>
                <span className='font-medium'>{cardText}</span>
            </UnstyledLink>
        </div>
  )
}
