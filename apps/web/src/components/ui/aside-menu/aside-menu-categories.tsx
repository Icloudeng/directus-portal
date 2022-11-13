import { useState } from 'react';

type Props<T> = {
  children(item: T): React.ReactNode;
  items: T[];
  menuTitle?: string;
};

export function AsideMenuCategories<
  T extends { [x: string]: any } & Pick<
    ICategoryItem,
    'name' | 'icon' | 'itemsNumber'
  >
>({ children, items, menuTitle }: Props<T>) {
  const [active, setActive] = useState(0);

  return (
    <div className='w-full flex flex-col xl:flex-row items-center xl:items-start gap-5 pt-7'>
      <div className='xl:sticky xl:top-56 w-full xl:flex-1 flex items-center justify-center xl:block p-3 xl:p-0 overflow-x-auto'>
        {menuTitle && <h4 className='mb-5 hidden xl:block'>{menuTitle}</h4>}
        {items.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              name={item.name}
              icon={item.icon}
              itemsNumber={item.itemsNumber}
              active={active === i}
              onClick={() => setActive(i)}
            />
          );
        })}
      </div>
      <div className='xl:flex-[3.7]'>
        {items[active] && children(items[active])}
      </div>
    </div>
  );
}

type ICategoryItem = {
  name: string;
  icon: React.ReactNode;
  itemsNumber: null | number;
  active?: boolean;
  onClick?: () => void;
};

export const CategoryItem = ({
  active,
  name,
  icon,
  itemsNumber,
  onClick,
}: ICategoryItem) => {
  return (
    <ul className='w-full flex xl:flex-col items-start justify-start gap-1'>
      <li className='relative p-1 w-full'>
        <a
          className={`flex items-center gap-x-3 cursor-pointer ${
            active ? 'text-primary-500' : 'text-gray-700'
          }`}
          onClick={onClick}
        >
          <span className='relative w-7 h-7 flex items-center justify-center'>
            {icon}
          </span>
          <span className=' font-medium hover:font-semibold'>{name}</span>
          <span className='hidden xl:block absolute right-7 '>
            {itemsNumber !== null && <>({itemsNumber})</>}
          </span>
        </a>
      </li>
    </ul>
  );
};
