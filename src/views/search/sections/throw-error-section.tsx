import { useState } from 'react';

export default function ThrowErrorSection() {
  const [hasError, setHasError] = useState<boolean>(false);

  if (hasError) {
    throw new Error('The Emperor Will Show You The True Nature Of The Force...');
  }

  return (
    <section>
      <button
        onClick={() => {
          setHasError(true);
        }}
      >
        Throw Error
      </button>
    </section>
  );
}
