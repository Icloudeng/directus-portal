import UnstyledLink from '@/components/ui/links/UnstyledLink'

type ICategoryItem = {
    text: string;
    icon: JSX.IntrinsicElements| any;
    itemsNumber: number;
}

export const CategoryItem = ({text, icon, itemsNumber}:ICategoryItem) => {
  return (
    <li className='relative p-1 w-full'>
        <UnstyledLink className='flex items-center gap-x-3' href='#'>
            <span className='relative w-7 h-7 flex items-center justify-center text-primary-500'>
                {icon}
            </span>
            <span className='text-primary-400 font-medium hover:font-semibold'>{text}</span>
            <span className='absolute right-20 text-primary-400'>({itemsNumber})</span>
        </UnstyledLink>
    </li>
  )
}
