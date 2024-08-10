'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';

function SearchResultsFrame(props: PropsWithChildren) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function frameClick() {
    router.push('/' + '?' + searchParams);
  }
  return <div onClick={frameClick}>{props.children}</div>;
}

export default SearchResultsFrame;
