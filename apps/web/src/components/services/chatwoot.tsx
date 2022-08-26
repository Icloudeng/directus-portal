import React, { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings: any;
    chatwootSDK: any;
  }
}

export default function ChatwootWidget() {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'en',
      type: 'standard',
    };

    (function (d, t) {
      const BASE_URL =
        process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL ||
        'https://chatwoot-web.icloudeng.com';

      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];

      g.src = BASE_URL + '/packs/js/sdk.js';
      s?.parentNode?.insertBefore(g, s);
      g.async = !0;
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken:
            process.env.NEXT_PUBLIC_CHATWOOT_API_KEY ||
            'JBavMEU4FUNNSyVjD3R3ShBE',
          baseUrl: BASE_URL,
        });
      };
    })(document, 'script');
  }, []);

  return <></>;
}
