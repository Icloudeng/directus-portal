import { FormEvent, useState } from 'react';

import { useFetch } from './useFetch';

export function useFormSubmit(url: string, successTimeout = 1000 * 60) {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const { callFetch, loading } = useFetch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const form = new FormData(target);
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
            (target.querySelector(`[name=${key}]`) as HTMLInputElement).value =
              '';
          });
        }
      });
  };

  return {
    errors,
    success,
    loading,
    onSubmit,
  };
}
