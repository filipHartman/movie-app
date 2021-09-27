import React from 'react';

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Opps! Your mother will be pissed off!</h1>;
    }
    return this.props.children;
  }
}
