import styles from './close-button.module.scss';

export interface ICloseButtonProps {
  clickHandler: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function CloseButton(props: ICloseButtonProps) {
  return (
    <div
      className={styles.close}
      onClick={(event) => {
        props.clickHandler(event);
      }}
    ></div>
  );
}

export default CloseButton;
