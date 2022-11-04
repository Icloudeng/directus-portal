import UnstyledLink from '@/components/ui/links/UnstyledLink'

type ICategoryItem = {
    text: string;
    icon: JSX.IntrinsicElements| any;
    itemsNumber: number;
    active?: boolean;
}

export const CategoryItem = ({text, icon, itemsNumber, active}:ICategoryItem) => {
  return (
    <li className='relative p-1 w-full'>
        <UnstyledLink className={`flex items-center gap-x-3 ${active? 'text-primary-500': 'text-gray-700'} `} href='#'>
            <span className='relative w-7 h-7 flex items-center justify-center'>
                {icon}
            </span>
            <span className=' font-medium hover:font-semibold'>{text}</span>
            <span className='hidden xl:block absolute right-7 '>({itemsNumber})</span>
        </UnstyledLink>
    </li>
  )
}
