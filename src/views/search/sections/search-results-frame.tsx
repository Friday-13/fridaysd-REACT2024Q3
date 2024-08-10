'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';

function SearchResultsFrame(props: PropsWithChildren) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function frameClick() {
    console.log(searchParams.toString());
    router.push('/' + '?' + searchParams.toString());
  }
  return <div onClick={frameClick}>{props.children}</div>;
}

export default SearchResultsFrame;
