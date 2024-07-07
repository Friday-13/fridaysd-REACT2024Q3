import { Component, ComponentProps, FormEvent } from 'react';
import QueryStorge from '../../services/query-storage';

interface SearchInputProps extends ComponentProps<'div'> {
  label?: {
    content: string;
  };
  input?: {
    name: string;
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
      <>
        <label htmlFor={this.props.input?.name}>{this.props.label?.content}</label>
        <input
          type="search"
          name={this.props.input?.name}
          onChange={this.handleQueryChange}
          defaultValue={QueryStorge.getQuery()}
        />
        <button
          onClick={() => {
            this.props.searchCallback(this.state.query);
            QueryStorge.saveQuery(this.state.query);
          }}
        >
          {this.props.button?.content}
        </button>
      </>
    );
  }
}
