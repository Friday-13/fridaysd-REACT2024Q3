import { Component } from 'react';
import './App.css';
import Search from './views/search/search';
import ErrorBoundary from './components/error-boundarie/error-boundarie';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
    );
  }
}

export default App;
