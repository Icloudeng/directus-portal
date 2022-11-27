import { useSharedData } from '@/app/store';
import { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings: any;
    chatwootSDK: any;
  }
}

export function ChatwootNext() {
  const shared = useSharedData();
  const Chatwoot = shared?.Chatwoot;

  return (
    <>
      {Chatwoot && Chatwoot.status === 'published' && (
        <ChatwootWidget
          baseUrl={Chatwoot.base_url}
          websiteToken={Chatwoot.website_token}
        />
      )}
    </>
  );
}

function ChatwootWidget({
  websiteToken,
  baseUrl,
}: {
  baseUrl: string;
  websiteToken: string;
}) {
  const { locale } = useSharedData();

  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'en',
      type: 'standard',
    };

    (function (d, t) {
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];

      g.src = baseUrl + '/packs/js/sdk.js';
      s?.parentNode?.insertBefore(g, s);
      g.async = !0;
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken,
          baseUrl,
        });
      };
    })(document, 'script');
  }, []);

  useEffect(() => {
    if (locale && window.chatwootSettings) {
      window.chatwootSettings['locale'] = locale;
    }
  }, [locale]);

  return <></>;
}
