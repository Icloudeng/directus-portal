import { FormEvent, useRef, useState } from 'react';

import { useFetch } from './useFetch';

export function useFormSubmit(url: string, successTimeout = 1000 * 60) {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const { callFetch, loading } = useFetch();
  const metadata = useRef<{ [key: string]: any }>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const form = new FormData(target);

    Object.keys(metadata.current).forEach((key) => {
      const value = metadata.current[key];

      form.set(
        `metadata.${key}`,
        typeof value === 'object' ? JSON.stringify(value) : value.toString()
      );
    });

    const data = Object.fromEntries(form.entries());
    setErrors({});
    setSuccess(false);

    callFetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(async (res) => ({ res, json: await res.json() }))
      .then(({ res, json }) => {
        if (!res.ok && res.status === 400) {
          setErrors(json);
        } else if (res.ok) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), successTimeout);
          form.forEach((_, key) => {
            const input = target?.querySelector<HTMLInputElement>(
              `[name="${key}"]`
            );

            if (input) {
              input.value = '';
            }
          });
        }
      });
  };

  return {
    errors,
    success,
    loading,
    onSubmit,
    metadata,
  };
}
