import { useSharedData } from '@/app/store';
import { useEffect } from 'react';
import matomoInit from '@/lib/matomo-next';

export function MatomoNext() {
  const shared = useSharedData();

  useEffect(() => {
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
  }, []);

  return <></>;
}
