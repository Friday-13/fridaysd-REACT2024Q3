import closePerson from '@utils/close-person/close-person';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

function SearchResultsFrame(props: PropsWithChildren) {
  const router = useRouter();

  function frameClick() {
    closePerson(router);
  }
  return <div onClick={frameClick}>{props.children}</div>;
}

export default SearchResultsFrame;
