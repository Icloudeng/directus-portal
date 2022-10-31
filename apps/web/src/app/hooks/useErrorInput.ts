import { useEffect, useState } from 'react';

export const useErrorInput = (
  name: string,
  errors: { [x: string]: any } | undefined
) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!errors) return;
    if (name in errors) {
      setError(errors[name]);
    } else {
      setError(null);
    }
  }, [errors]);

  const onKeyUp = () => setError(null);

  return { error, onKeyUp };
};
