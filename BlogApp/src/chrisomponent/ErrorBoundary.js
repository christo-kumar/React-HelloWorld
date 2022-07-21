import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error) {
        this.setState( { hasError: true } );
    }

    render() {
        return this.state.hasError ? <p> Something went wrong. </p> : this.props.children;
    }

}

export default ErrorBoundary;