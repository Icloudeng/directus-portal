import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../buttons/Button';
import { Spinner } from '../Spinner';

export function LoadMore({
  fetchUrl,
  limit,
  query,
  queryName,
  onNewItems,
}: {
  fetchUrl: string;
  limit: number;
  query: string | undefined;
  queryName: string;
  onNewItems?: (items: any[]) => void;
}) {
  const { t } = useTranslation();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const offset = useRef(limit);
  const lastQuery = useRef<string | undefined>('-');

  useEffect(() => {
    offset.current = limit;
  }, [query]);

  const loadData = useCallback(() => {
    onNewItems && items.length > 0 && onNewItems(items);
    setLoading(true);
    return fetch(
      `${fetchUrl}?offset=${offset.current}&limit=${limit}${
        query ? `&${queryName}=` + query : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
          if (data.length > 0) {
            offset.current += limit;
          }
        }
      })
      .finally(() => setLoading(false));
  }, [offset.current, query, limit, items, onNewItems]);

  useEffect(() => {
    if (query !== lastQuery.current) {
      lastQuery.current = query;
      loadData();
    }
  }, [query]);

  return (
    <>
      {items.length > 0 && (
        <Button
          variant='outline'
          onClick={loadData}
          className='w-full text-center flex justify-center items-center'
        >
          {loading && items.length > 0 ? <Spinner /> : t('Load more')}
        </Button>
      )}
    </>
  );
}
