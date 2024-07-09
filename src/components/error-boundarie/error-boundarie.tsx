import { Component, ComponentProps, ErrorInfo } from 'react';

class ErrorBoundary extends Component<ComponentProps<'div'>> {
  state = {
    error: null,
    errorMessage: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  componentDidCatch(error: Error, message: ErrorInfo) {
    this.setState({
      error: error,
      errorMesage: message,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h1>No, I Am Your Father.</h1>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
