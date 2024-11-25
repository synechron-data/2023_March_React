import React, { Component } from 'react';

const ErrorHandlerHOC = (InputComponent) => class extends Component {
    static get displayName() {
        return "ErrorHandlerHOC";
    }
    
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        if (this.state.hasError) {
            var errImg = require('../../assets/component-error.png');
            return (
                <div className="text-center mt-5">
                    <img src={errImg} alt="Component Error" className='rounded' />
                </div>
            );
        } else {
            return <InputComponent />
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
};

export default ErrorHandlerHOC;