import { useEffect, useState } from 'react';

interface UseFetchOptions {
  enabled: boolean;
}

const DEFAULT_OPTIONS = {
  enabled: true,
};

const useFetch = <TData>(
  url: string,
  options: UseFetchOptions = DEFAULT_OPTIONS
) => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetcher = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      setData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (options.enabled) {
      fetcher();
    }
    /*
     * Disabled intentionally because fetcher is created every render.
     * It could be wrapped in `useCallback` but logic is cleaner without it.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, options.enabled]);

  return {
    data,
    isLoading,
    error,
    fetcher,
  };
};

export default useFetch;
