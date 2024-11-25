import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this._clickCount = 0;
        this.state = { count: 0, flag: false };
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
        this.reset = this.reset.bind(this);
    }

    _manageClickCount(e) {
        this._clickCount += 1;
        if (this._clickCount > 9) {
            this.setState({ flag: true }, () => {
                this.props.onMax(this.state.flag);
            });
        }
    }

    _inc(e) {
        this.setState({ count: this.state.count + this.props.interval }, () => {
            this._manageClickCount(e);
        });
    }

    _dec(e) {
        this.setState({ count: this.state.count - this.props.interval }, () => {
            this._manageClickCount(e);
        });
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" value={this.state.count} readOnly />
                    <button className="btn btn-info" disabled={this.state.flag}
                        style={this._style}
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info" disabled={this.state.flag}
                        style={this._style}
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                    <button className="btn btn-secondary" disabled={!this.state.flag}
                        style={!this.state.flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}
                        onClick={this.reset}>
                        <span className='fs-4'>Reset</span>
                    </button>
                </div>
            </>
        );
    }

    reset(e) {
        this._clickCount = 0;
        this.setState({ count: 0, flag: false }, () => {
            this.props.onMax(this.state.flag);
        });
    }

    get _style() {
        return this.state.flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}
    }

    static get defaultProps() {
        return {
            interval: 1
        };
    }

    static get propTypes() {
        return {
            interval: PropTypes.number
        };
    }
}

// const Counter = React.forwardRef((props, ref) => {
//     class Counter extends Component {
//         constructor(props) {
//             super(props);
//             this._clickCount = 0;
//             this.state = { count: 0, flag: false };
//             this._inc = this._inc.bind(this);
//             this._dec = this._dec.bind(this);
//             this.reset = this.reset.bind(this);
//         }

//         _manageClickCount(e) {
//             this._clickCount += 1;
//             if (this._clickCount > 9) {
//                 this.setState({ flag: true });
//             }
//         }

//         _inc(e) {
//             this.setState({ count: this.state.count + this.props.interval }, () => {
//                 this._manageClickCount(e);
//             });
//         }

//         _dec(e) {
//             this.setState({ count: this.state.count - this.props.interval }, () => {
//                 this._manageClickCount(e);
//             });
//         }

//         render() {
//             return (
//                 <>
//                     <div className="text-center">
//                         <h3 className="text-info">Counter Component</h3>
//                     </div>
//                     <div className="d-grid gap-2 mx-auto col-6">
//                         <input type="text" className="form-control form-control-lg" value={this.state.count} readOnly />
//                         <button ref={ref} className="btn btn-info" disabled={this.state.flag}
//                             style={this._style}
//                             onClick={this._inc}>
//                             <span className='fs-4'>+</span>
//                         </button>
//                         <button className="btn btn-info" disabled={this.state.flag}
//                             style={this._style}
//                             onClick={this._dec}>
//                             <span className='fs-4'>-</span>
//                         </button>
//                         <button className="btn btn-secondary" disabled={!this.state.flag}
//                             style={!this.state.flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}
//                             onClick={this.reset}>
//                             <span className='fs-4'>Reset</span>
//                         </button>
//                     </div>
//                 </>
//             );
//         }

//         reset(e) {
//             this._clickCount = 0;
//             this.setState({ count: 0, flag: false });
//         }

//         get _style() {
//             return this.state.flag ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}
//         }

//         static get defaultProps() {
//             return {
//                 interval: 1
//             };
//         }

//         static get propTypes() {
//             return {
//                 interval: PropTypes.number
//             };
//         }
//     }

//     return <Counter />
// })

class CounterAssignment extends Component {
    constructor(props) {
        super(props);
        this._counter = React.createRef();
        // this._bRef = React.createRef();
        this.state = { message: "" };
        this.p_reset = this.p_reset.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage(flag) {
        if (flag)
            this.setState({ message: "Max Click Reached, please click the reset button to restart" });
        else
            this.setState({ message: "" });
    }

    p_reset(e) {
        // Deprecated
        // if (this.refs.c)
        //     console.log(this.refs.c);

        // if (this.c)
        //     console.log(this.c);

        // if (this._counter.current)
        //     console.log(this._counter);

        if (this._counter.current)
            this._counter.current.reset();

        // console.log(this._bRef);
    }

    render() {
        return (
            <div>
                <h2 className="text-success text-center mt-5 mb-5">Calling Parent Method from Child Component</h2>

                {
                    this.state.message && (
                        <div className="alert alert-danger text-center mt-5">
                            <h4>
                                <i className="bi bi-info-square-fill"></i>
                            </h4>
                            <h4 className="alert-heading">{this.state.message}</h4>
                        </div>
                    )
                }

                <Counter ref={this._counter} onMax={this.updateMessage} />
            </div>

            // <div>
            //     <h2 className="text-success text-center mt-5 mb-5">Calling Child Method from Parent using ref</h2>

            //     {/* Deprecated */}
            //     {/* <Counter ref="c" /> */}
            //     {/* <Counter ref={(elem) => { this.c = elem; }} /> */}

            //     <Counter ref={this._counter} />

            //     {/* <Counter ref={this._bRef} interval={10} /> */}

            //     <div className="d-grid gap-2 mx-auto col-6 mt-5">
            //         <button className="btn btn-warning" onClick={this.p_reset}>
            //             <span className='fs-4'>Parent Reset</span>
            //         </button>
            //     </div>
            // </div>

            // <div>
            //     <Counter />
            //     <hr />
            //     <Counter interval={10} />
            // </div>
        );
    }
}

export default CounterAssignment;