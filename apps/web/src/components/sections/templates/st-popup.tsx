import { ST_Popup, STemplates_Props } from '@apps/contracts';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';

import { useMut } from '@/cms/mut';

export function ST_PopupFC({ items }: STemplates_Props<ST_Popup>) {
  return (
    <section className='text-gray-600 body-font'>
      <div id='root'>
        {items.map((item) => (
          <STpopup key={item.item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function STpopup(props: { item: ST_Popup }) {
  const item = useMut(props.item.item);
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className='rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white'
      >
        {item.translations?.button_text}
      </Button>

      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={close}
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              <DialogTitle
                as='h3'
                className='text-base/7 font-medium text-white'
              >
                {item.translations?.title}
              </DialogTitle>
              <p className='mt-2 text-sm/6 text-white/50'>
                {item.translations?.description}
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
