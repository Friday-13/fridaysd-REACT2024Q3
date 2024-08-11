import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

function createSearchParams() {
  const searchParams = useSearchParams();
  const callback = useCallback(
    (params: Array<{ name: string; value: string }>) => {
      const searchParamsURL = new URLSearchParams(searchParams.toString());
      params.forEach((param) => searchParamsURL.set(param.name, param.value));
      return searchParamsURL.toString();
    },
    [searchParams]
  );
  return callback;
}

export default createSearchParams;
