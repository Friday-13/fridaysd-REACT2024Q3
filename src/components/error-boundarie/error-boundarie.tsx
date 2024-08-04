import { Component, ComponentProps, ErrorInfo } from 'react';

class ErrorBoundary extends Component<ComponentProps<'div'>> {
  state = {
    hasError: null,
    errorMessage: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: error };
  }

  componentDidCatch(error: Error, message: ErrorInfo) {
    this.setState({
      hasError: error,
      errorMesage: message,
    });
  }

  render() {
    if (this.state.hasError) {
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
