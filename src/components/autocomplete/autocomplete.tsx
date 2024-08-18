import {
  ChangeEventHandler,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  useState,
} from "react";
import OptionsList from "./options-list";
import styles from "./autocomplete.module.scss";

interface IAutocomplete
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  options: Array<string>;
}

function AutocompleteComponent(
  props: IAutocomplete,
  ref?: LegacyRef<HTMLInputElement>,
) {
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<Array<string>>(
    props.options,
  );
  const [value, setValue] = useState<string>("");

  const filterOptions: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentValue: string = event.target.value;
    setValue(currentValue);
    const validOptions = props.options.filter((country) =>
      country.toLowerCase().includes(currentValue.toLowerCase()),
    );
    setFilteredOptions(validOptions);
  };

  const selectOption = (option: string) => {
    const validOptions = props.options.filter((country) =>
      country.toLowerCase().includes(option.toLowerCase()),
    );
    setFilteredOptions(validOptions);
    setValue(option);
    setIsOptionsVisible(false);
  };
  const { options: _optopns, ...inputOptions } = props;

  return (
    <div className={styles.autocomplete}>
      <input
        {...inputOptions}
        ref={ref}
        type="text"
        onClick={() => setIsOptionsVisible(true)}
        value={value}
        onChange={filterOptions}
      />
      <OptionsList
        options={filteredOptions}
        isVisible={isOptionsVisible}
        selectOption={selectOption}
      />
    </div>
  );
}

export default forwardRef(AutocompleteComponent);
