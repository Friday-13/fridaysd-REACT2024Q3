import { Component } from 'react';
import Search from './views/search/search';
import ErrorBoundary from './components/error-boundarie/error-boundarie';
// import './App.module.scss';

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
