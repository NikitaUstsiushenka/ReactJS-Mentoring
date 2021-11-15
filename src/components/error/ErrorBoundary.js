import React from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h1>{'Something went wrong. Please reload page.'}</h1>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
