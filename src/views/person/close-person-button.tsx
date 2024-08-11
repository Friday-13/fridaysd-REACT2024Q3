import CloseButton from '@components/close-button/close-button';
import closePerson from '@utils/close-person/close-person';
import { useRouter } from 'next/router';

function ClosePersonButton() {
  const router = useRouter();

  return (
    <CloseButton
      clickHandler={() => {
        closePerson(router);
      }}
    />
  );
}

export default ClosePersonButton;
