import { Component, ComponentProps, FormEvent } from 'react';
import styles from './search-input.module.scss';

interface SearchInputProps extends ComponentProps<'div'> {
  label?: {
    content: string;
  };
  input?: {
    name: string;
    initialValue: string;
  };
  button?: ComponentProps<'button'>;
  searchCallback: (query: string) => void;
}

export default class SearchInput extends Component<SearchInputProps> {
  state = {
    query: '',
  };

  handleQueryChange = (newValue: FormEvent<HTMLInputElement>) => {
    this.setState({
      query: newValue.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={styles.searchInput}>
        <label htmlFor={this.props.input?.name}>{this.props.label?.content}</label>
        <input
          type="search"
          name={this.props.input?.name}
          onChange={this.handleQueryChange}
          defaultValue={this.props.input?.initialValue}
        />
        <button
          onClick={() => {
            this.props.searchCallback(this.state.query);
          }}
        >
          {this.props.button?.content}
        </button>
      </div>
    );
  }
}
