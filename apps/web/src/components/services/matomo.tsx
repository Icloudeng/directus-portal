import { useSharedData } from '@/app/store';
import { useEffect } from 'react';
import matomoInit from '@/lib/matomo-next';

export function MatomoNext() {
  const { Matomo } = useSharedData();

  useEffect(() => {
    if (Matomo && Matomo.status === 'published') {
      matomoInit({
        url: Matomo.base_url,
        siteId: Matomo.site_id + '',
      });
    }
  }, []);

  return <></>;
}
