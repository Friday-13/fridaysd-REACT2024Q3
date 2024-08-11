'use client';

import CloseButton from '@components/close-button/close-button';
import { useRouter, useSearchParams } from 'next/navigation';

function ClosePersonButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(router);
  return (
    <CloseButton
      clickHandler={() => {
        router.push('/' + '?' + searchParams);
      }}
    />
  );
}

export default ClosePersonButton;
