import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ST_ContentStepper, STemplates_Props } from '@packages/contracts';
import { Fragment } from 'react';

import clsxm from '@/lib/clsxm';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_ContentSteppersFC({
  items,
}: STemplates_Props<ST_ContentStepper>) {
  const { locale } = useSharedData();

  return (
    <TabGroup vertical>
      <TabList
        className={clsxm(
          'items-center justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mb-8 group',
          'border border-solid border-gray-200 rounded-2xl p-3'
        )}
      >
        {items.map((item, index) => {
          const { translations, id } = mut(item.item, locale);

          return (
            <Tab key={id} as={Fragment}>
              {({ selected, hover }) => {
                return (
                  <button
                    className={clsxm(
                      'flex items-center text-primary-600 space-x-2.5 focus:outline-none transition',
                      'text-gray-500',
                      (selected || hover) && 'text-primary-600/80'
                    )}
                  >
                    <span
                      className={clsxm(
                        'flex items-center justify-center w-8 h-8 border rounded-full shrink-0',
                        'border-gray-500',
                        selected && 'border-primary-600'
                      )}
                    >
                      {index + 1}
                    </span>
                    <span>
                      <h3 className='font-medium leading-tight text-base'>
                        {translations?.title}
                      </h3>
                    </span>
                  </button>
                );
              }}
            </Tab>
          );
        })}
      </TabList>

      <TabPanels>
        {items.map((item) => {
          const { translations, id } = mut(item.item, locale);

          return (
            <TabPanel
              key={id}
              className={clsxm(
                'px-0 overflow-hidden prose mb-4 w-full max-w-none'
              )}
              dangerouslySetInnerHTML={{
                __html: translations?.content || '',
              }}
            />
          );
        })}
      </TabPanels>
    </TabGroup>
  );
}
