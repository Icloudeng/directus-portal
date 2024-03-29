import { useEffect, useRef } from 'react';

import matomoInit from '@/lib/matomo-next';

import { useSharedData } from '@/app/store';

export function MatomoNext() {
  const shared = useSharedData();

  const init = useRef(() => {
    const Matomo = shared?.Matomo;
    if (Matomo && Matomo.status === 'published') {
      matomoInit({
        url:
          Matomo.base_url.slice(-1) === '/'
            ? Matomo.base_url.slice(0, -1)
            : Matomo.base_url,
        siteId: Matomo.site_id + '',
      });
    }
  });

  useEffect(() => {
    init.current();
  }, [init]);

  return <></>;
}
