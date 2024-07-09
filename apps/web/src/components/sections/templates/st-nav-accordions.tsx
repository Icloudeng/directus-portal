import type { ST_NavAccordion, STemplates_Props } from '@packages/contracts';
import Image from 'next/legacy/image';

import { Accordion, AccordionChild } from '@/components/ui/accordion/Accordion';
import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_NavAccordionsFC({
  items,
}: STemplates_Props<ST_NavAccordion>) {
  const { locale } = useSharedData();
  const first = items[0];

  return (
    <Accordion prev_next_buttons={first.item.prev_next_buttons}>
      {items.map(({ item }) => {
        const { translations, image } = mut(item, locale);
        const markdown_content = translations?.markdown_content || '';
        return (
          <AccordionChild
            key={item.id}
            title={translations?.title}
            description={translations?.description}
          >
            {image?.src && (
              <div className='relative h-[20rem] mb-2'>
                <Image
                  className='image object-cover'
                  src={image.src}
                  layout='fill'
                  objectFit='cover'
                  alt={translations?.title}
                />
              </div>
            )}
            {markdown_content && (
              <div className='prose max-w-none'>
                <MarkdownContent>{markdown_content}</MarkdownContent>
              </div>
            )}
          </AccordionChild>
        );
      })}
    </Accordion>
  );
}
