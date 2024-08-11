import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

function StoreWrapper(props: PropsWithChildren) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default StoreWrapper;
