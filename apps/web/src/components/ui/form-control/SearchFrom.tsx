import { useRouter } from 'next/router';
import { useState } from 'react';

import { InputSearch } from '../inputs/InputSearch';

export function SearchForm({ queryName = 'q' }) {
  const route = useRouter();
  const [query, setQuery] = useState('');
  return (
    <form
      method='get'
      onSubmit={(e) => {
        e.preventDefault();
        const { search, origin, pathname } = window.location;
        const params = new URLSearchParams(search);
        params.set(queryName, query);
        const url = origin + pathname + '?' + params.toString();
        route.push(url);
      }}
    >
      <InputSearch
        name={queryName}
        onChange={(value) => setQuery(value)}
        defaultValue={(route.query.q as string) || ''}
        withButton={true}
      />
    </form>
  );
}
