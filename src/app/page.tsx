import { PropsWithChildren } from 'react';

export default function RootPage(props: PropsWithChildren) {
  return (
    <>
      <h1>Main page</h1>
      {props.children}
    </>
  );
}
