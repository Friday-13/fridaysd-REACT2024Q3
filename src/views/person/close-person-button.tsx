'use client';

import CloseButton from '@components/close-button/close-button';
import { useRouter } from 'next/navigation';

function ClosePersonButton() {
  const router = useRouter();

  return (
    <CloseButton
      clickHandler={() => {
        router.push('/');
      }}
    />
  );
}

export default ClosePersonButton;
