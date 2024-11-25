import React, { Component } from 'react';
import ClockHOC from './ClockHOC';
import DataHOC from './DataHOC';
import ErrorHandlerHOC from './ErrorHandlerHOC';

class HOCDemoComponentOne extends Component {
    render() {
        throw new Error("Just for Demo");

        return (
            <div className='mt-5'>
                <h1 className="text-info">Higher Order Component Demo One</h1>
                <h2 className="text-success">
                    Some Data, given using props: {this.props.data}
                </h2>
            </div>
        );
    }
}

export default ErrorHandlerHOC(ClockHOC(DataHOC(HOCDemoComponentOne)));