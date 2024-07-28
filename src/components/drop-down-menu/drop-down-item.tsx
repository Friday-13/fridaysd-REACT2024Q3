import { ComponentProps } from 'react';

function DropDownItem(props: ComponentProps<'li'>) {
  return <li {...props}>{props.children}</li>;
}

export default DropDownItem;
