import { Component, ComponentProps } from 'react';
import styles from './loader.module.scss';

export default class Loader extends Component<ComponentProps<'div'>> {
  render() {
    return <div className={styles.loader}></div>;
  }
}
