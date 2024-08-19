import styles from "./autocomplete.module.scss";

export interface IOptionList {
  options: Array<string>;
  isVisible: boolean;
  selectOption: (option: string) => void;
}

function OptionsList(props: IOptionList) {
  if (!props.isVisible) return <></>;

  return (
    <ul className={styles.optionsList}>
      {props.options.map((option, index) => (
        <li
          className={styles.optionsListOption}
          key={index}
          onClick={() => props.selectOption(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}

export default OptionsList;
