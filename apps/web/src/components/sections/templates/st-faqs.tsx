import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ST_FAQ, STemplates_Props } from '@packages/contracts';
import { useEffect, useRef } from 'react';

import cn from '@/lib/cn';

import { useMut } from '@/cms/mut';

export function ST_FAQsFC({ items }: STemplates_Props<ST_FAQ>) {
  return (
    <div className='accordion-group' data-accordion='default-accordion'>
      {items.map((item, index) => (
        <STFAQ key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

function STFAQ(props: { item: ST_FAQ; index: number }) {
  const item = useMut(props.item.item);

  return (
    <Disclosure defaultOpen={props.index === 0}>
      {({ open, close }) => {
        return (
          <>
            <AutoClose open={open} close={close} />

            <div
              className={cn(
                'accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 mb-2',
                'rounded-2xl hover:bg-primary-50 hover:bg-opacity-50',
                open && ['bg-primary-50 bg-opacity-40 active']
              )}
              id={`basic-heading-with-arrow-${props.index}`}
            >
              <DisclosureButton
                className={cn(
                  'accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left',
                  'hover:text-primary-600',
                  open && ['font-medium text-primary-600']
                )}
                aria-controls={`basic-collapse-with-arrow-${props.index}`}
              >
                <h5>{item.translations?.title}</h5>
                <svg
                  className={cn(
                    'text-gray-500 transition duration-500 group-hover:text-primary-600',
                    open && ['primary-600 rotate-180']
                  )}
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </DisclosureButton>

              <DisclosurePanel
                transition
                id={`basic-collapse-with-arrow-${props.index}`}
                aria-labelledby={`basic-heading-with-arrow-${props.index}`}
                className={cn(
                  'accordion-content px-0 overflow-hidden prose mb-4 w-full',
                  'origin-top transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0'
                )}
                key={item.id}
                dangerouslySetInnerHTML={{
                  __html: item.translations?.content || '',
                }}
              />
            </div>
          </>
        );
      }}
    </Disclosure>
  );
}

function AutoClose(props: { open: boolean; close: () => void }) {
  const firstLoad = useRef(false);

  useEffect(() => {
    if (!firstLoad.current) {
      firstLoad.current = true;
      return;
    }

    if (props.open) {
      window.dispatchEvent(new Event('auto-close'));
      window.addEventListener('auto-close', props.close);
      return;
    } else {
      window.removeEventListener('auto-close', props.close);
    }

    return () => {
      window.removeEventListener('auto-close', props.close);
    };
  }, [props.open, props.close, firstLoad]);

  return <></>;
}
