import { useCallback, useState } from 'react';

export function useFetch() {
  const [loading, setLoading] = useState(false);

  const callFetch = useCallback(
    (input: RequestInfo | URL, init?: RequestInit | undefined) => {
      setLoading(true);
      const res = fetch(input, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...(init?.headers || {}),
        },
        ...(init || {}),
      });
      res.finally(() => setLoading(false));
      return res;
    },
    []
  );

  return {
    callFetch,
    loading,
  };
}
