import { Component, ComponentProps } from 'react';
import { person } from '../../services/api';

interface SearchResultsProps extends ComponentProps<'div'> {
  searchResults: Array<person>;
  isLoading: boolean;
}

export default class SeachResults extends Component<SearchResultsProps> {
  render() {
    if (this.props.isLoading) {
      return <div className="loader"></div>;
    }
    return (
      <ul>
        {this.props.searchResults.map((result, index) => (
          <li key={index}>
            <span>Name: {result.name}</span>
            <span>Gender: {result.gender}</span>
            <span>Birth year: {result.birth_year}</span>
            <span>Eye color: {result.eye_color}</span>
          </li>
        ))}
      </ul>
    );
  }
}
