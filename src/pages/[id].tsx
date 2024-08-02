import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PersonPage() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
  }, []);
  return <h1>Person page</h1>;
}
