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
    if (this.state && this.state.hasError) {
      return (
        <div className="container">
          <h4>{'Something went wrong. Please reload page.'}</h4>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
