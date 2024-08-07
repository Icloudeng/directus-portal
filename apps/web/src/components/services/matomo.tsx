import { init } from '@socialgouv/matomo-next';
import { useEffect } from 'react';

import { useSharedData } from '@/app/store';

export function MatomoNext() {
  const shared = useSharedData();
  const Matomo = shared?.Matomo;

  useEffect(() => {
    if (Matomo && Matomo.status === 'published') {
      const baseUrl = Matomo.base_url;
      baseUrl.slice(-1) === '/' ? baseUrl.slice(0, -1) : baseUrl;

      init({
        url: baseUrl,
        siteId: Matomo.site_id + '',
      });
    }
  }, [Matomo]);

  return <></>;
}
