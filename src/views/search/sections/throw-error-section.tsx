import { useContext, useState } from 'react';
import { getThemedClassName, ThemeContext } from '../../../context/theme-context';

export default function ThrowErrorSection() {
  const [hasError, setHasError] = useState<boolean>(false);
  const theme = useContext(ThemeContext);

  if (hasError) {
    throw new Error('No, I am your father!');
  }

  return (
    <section>
      <button
        className={getThemedClassName(theme, [])}
        onClick={() => {
          setHasError(true);
        }}
      >
        Throw Error
      </button>
    </section>
  );
}
