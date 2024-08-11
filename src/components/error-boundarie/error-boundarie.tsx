import { Component, ComponentProps, Context, ErrorInfo } from 'react';
import styles from '@styles/error.module.scss';
import { IThemeContext, ThemeContext } from '@context/theme-context';

class ErrorBoundary extends Component<ComponentProps<'div'>> {
  static contextType: Context<IThemeContext> = ThemeContext;
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
    const theme = this.context as IThemeContext;
    if (this.state.hasError) {
      return (
        <div className={styles['error-page']}>
          <h2>I Am Your Father.</h2>
          <button type="button" className={theme.theme} onClick={() => this.setState({ hasError: false })}>
            Nooo
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
