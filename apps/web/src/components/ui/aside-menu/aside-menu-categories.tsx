import { useEffect, useMemo, useState } from 'react';

import UnstyledLink from '../links/UnstyledLink';

type Props<T> = {
  children(item: T): React.ReactNode;
  items: T[];
  menuTitle?: string;
  hrefPrefix?: string;
};

const urlSafe = (value: string) =>
  value.toLowerCase().trim().split(' ').join('-');

export function AsideMenuCategories<
  T extends { [x: string]: any } & Pick<
    ICategoryItem,
    'name' | 'icon' | 'itemsNumber'
  >
>({ children, items, menuTitle, hrefPrefix }: Props<T>) {
  useMemo(() => {
    const canSort = !items.some(
      (r) => r.itemsNumber === null || r.itemsNumber === undefined
    );
    if (canSort) {
      items.sort(
        (a, b) => (b.itemsNumber as number) - (a.itemsNumber as number)
      );
    }
  }, [items]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const defaultP = items.findIndex((r) => {
      const cd = `#${hrefPrefix || ''}-${urlSafe(r.name)}`;
      return cd === location.hash;
    });
    setActive(defaultP > -1 ? defaultP : 0);
  }, [hrefPrefix, items]);

  return (
    <div className='w-full flex flex-col lg:flex-row items-center lg:items-start gap-5 pt-7'>
      <div className='lg:sticky lg:max-h-[80vh] lg:top-56 w-full lg:flex-1 flex items-center justify-center lg:block p-3 lg:p-0 overflow-x-auto'>
        {menuTitle && <h4 className='mb-5 hidden lg:block'>{menuTitle}</h4>}
        {items.map((item, i) => {
          return (
            <CategoryItem
              key={i}
              name={item.name}
              href={`#${hrefPrefix || ''}-${urlSafe(item.name)}`}
              icon={item.icon}
              itemsNumber={item.itemsNumber}
              active={active === i}
              onClick={() => setActive(i)}
            />
          );
        })}
      </div>
      <div className='lg:flex-[3.7]'>
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
  href?: string;
};

export const CategoryItem = ({
  active,
  name,
  icon,
  itemsNumber,
  onClick,
  href = '#',
}: ICategoryItem) => {
  return (
    <ul className='w-full flex lg:flex-col items-start justify-start gap-1'>
      <li className='relative p-1 w-full'>
        <UnstyledLink
          className={`flex items-center gap-x-3 cursor-pointer ${
            active ? 'text-primary-500' : 'text-gray-700'
          }`}
          onClick={onClick}
          href={href}
        >
          <span className='relative w-7 h-7 flex items-center justify-center'>
            {icon}
          </span>
          <span className=' font-medium hover:font-semibold'>{name}</span>
          <span className='hidden lg:block absolute right-7 '>
            {itemsNumber !== null && <>({itemsNumber})</>}
          </span>
        </UnstyledLink>
      </li>
    </ul>
  );
};
