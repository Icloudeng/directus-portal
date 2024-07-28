import { ST_StyledImageCard, STemplates_Props } from '@packages/contracts';
import React, { Fragment } from 'react';

import cn from '@/lib/cn';

import { useMut } from '@/cms/mut';

export function ST_StyledImageCardsFC({
  items,
}: STemplates_Props<ST_StyledImageCard>) {
  return (
    <div className='space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4'>
      {items.map((item) => {
        switch (item.item.style) {
          case 'gradient':
            return <GradientCard key={item.id} item={item} />;
          case 'circle_border':
            return <CircleCard key={item.id} item={item} />;
          case 'rectangle_border':
            return <RectangleCard key={item.id} item={item} />;
          default:
            return <React.Fragment key={item.id}></React.Fragment>;
        }
      })}
    </div>
  );
}

function RectangleCard(props: { item: ST_StyledImageCard }) {
  const { translations, image } = useMut(props.item.item);

  return (
    <div
      className='card-shadow rounded-2xl p-2 bg-cover bg-center h-96 relative overflow-hidden'
      style={{
        backgroundImage: `url("${image?.src || ''}")`,
      }}
    >
      <div className='h-full flex'>
        <div
          className={cn(
            'leading-none p-4 rounded-2xl mt-auto mb-2 text-4xl font-semibold tracking-tight text-white border w-full',
            'bg-opacity-80 backdrop-filter backdrop-blur-sm bg-primary-700/80 border-primary-600'
          )}
        >
          {splitTitle(translations?.title || '', (title) => (
            <>{title}</>
          ))}
        </div>
      </div>
    </div>
  );
}

function CircleCard(props: { item: ST_StyledImageCard }) {
  const { translations, image } = useMut(props.item.item);

  return (
    <div className='card-shadow rounded-2xl p-2 bg-cover bg-bottom h-96 relative overflow-hidden'>
      <div className='absolute inset-0 bg-primary-200'>
        <div
          className='absolute rounded-full z-0 w-[26rem] h-[26rem] top-[2rem] right-[6rem]'
          style={{
            backgroundPosition: '25% -83%',
            backgroundSize: '100%',
            transform: 'translate(50%, -50%)',
            backgroundImage: `url("${image?.src || ''}")`,
          }}
        />
        <div
          className='absolute rounded-full w-[22rem] h-[22rem] top-[2rem] right-[6rem] border-[25px] border-primary-200'
          style={{
            transform: 'translate(50%, -50%)',
          }}
        />
        <div
          className='absolute rounded-full w-[14rem] h-[14rem] top-[2rem] right-[6rem] border-[25px] border-primary-200'
          style={{
            transform: 'translate(50%, -50%)',
          }}
        />
        <div className='h-full flex'>
          <div className='leading-none p-6 rounded-2xl mt-auto mb-2 text-4xl font-semibold drop-shadow-sm tracking-tight text-primary-900'>
            {splitTitle(translations?.title || '', (title) => (
              <span className='text-primary-600'>{title}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GradientCard(props: { item: ST_StyledImageCard }) {
  const { translations, image } = useMut(props.item.item);

  return (
    <div
      className='card-shadow rounded-2xl p-0 bg-cover bg-center h-96 relative overflow-hidden'
      style={{
        backgroundImage: `url("${image?.src || ''}")`,
      }}
    >
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `linear-gradient(transparent 0%, var(--color-primary-800) 100%)`,
        }}
      >
        <div className='h-full flex'>
          <div className='leading-none p-6 rounded-2xl mt-auto mb-2 text-4xl font-semibold drop-shadow-sm tracking-tight text-primary-50'>
            {splitTitle(translations?.title || '', (title) => (
              <span className='text-primary-200'>{title}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const splitTitle = (
  title: string,
  colorWrapper: (title: string) => JSX.Element
) => {
  const words = title.split(' ');
  const divider = Math.floor((words.length - 1) / 2);

  const dividedWords = words.reduce((acc, cur, index) => {
    if (index === 0) {
      acc.push(cur);
      return acc;
    }

    if (acc.length === 1 && index <= divider) {
      acc.push(cur);
    } else if (
      acc.length === 2 &&
      index > divider &&
      acc[acc.length - 1].split(' ').length > 1
    ) {
      acc.push(cur);
    } else {
      acc[acc.length - 1] += ` ${cur}`;
    }

    return acc;
  }, [] as string[]);

  return dividedWords.map((word, i) => {
    const items: JSX.Element[] = [];

    if (i === 1) {
      items.push(<Fragment key={i}>{colorWrapper(word)}</Fragment>);
    } else {
      items.push(<Fragment key={i}>{word}</Fragment>);
    }

    if (i !== dividedWords.length - 1) {
      items.push(<br key={i + 1} />);
    }

    return <Fragment key={i}>{items}</Fragment>;
  });
};
