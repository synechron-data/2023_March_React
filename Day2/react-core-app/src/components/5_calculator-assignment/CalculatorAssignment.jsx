/* eslint-disable */

import React, { Component } from 'react';
import TextInput from '../common/TextInput';

class CalculatorOne extends Component {
    constructor(props) {
        super(props);
        this.t1 = React.createRef();
        this.t2 = React.createRef();
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.t1.current.value) + parseInt(this.t2.current.value) });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend className="text-center">Calculator One - Uncontrolled</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1" ref={this.t1}
                                    defaultValue={this.state.data.t1} />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2" ref={this.t2}
                                    defaultValue={this.state.data.t2} />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success">Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

class CalculatorTwo extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: this.state.data.t1 + this.state.data.t2 });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    handleChange1(e) {
        var obj = { ...this.state.data };
        obj.t1 = parseInt(e.target.value);
        this.setState({ data: obj });
    }

    handleChange2(e) {
        var obj = { ...this.state.data };
        obj.t2 = parseInt(e.target.value);
        this.setState({ data: obj });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend className="text-center">Calculator Two - Controlled</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1"
                                    value={this.state.data.t1} onChange={this.handleChange1} />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2"
                                    value={this.state.data.t2} onChange={this.handleChange2} />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success">Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

class CalculatorThree extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: this.state.data.t1 + this.state.data.t2 });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    handleChange(e) {
        const field = e.target.id;
        var obj = { ...this.state.data };
        obj[field] = parseInt(e.target.value);
        this.setState({ data: obj });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend className="text-center">Calculator Three - Controlled with Single Change Handler</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1"
                                    value={this.state.data.t1} onChange={this.handleChange} />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2"
                                    value={this.state.data.t2} onChange={this.handleChange} />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success">Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

class CalculatorFour extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: this.state.data.t1 + this.state.data.t2 });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    handleChange(e) {
        const field = e.target.id;
        var obj = { ...this.state.data };
        obj[field] = parseInt(e.target.value);
        this.setState({ data: obj });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend className="text-center">Calculator Four - UI Composition</legend>

                            <TextInput label={"Number One"} name={"t1"} value={this.state.data.t1}
                                onChange={this.handleChange} />

                            <TextInput label={"Number Two"} name={"t2"} value={this.state.data.t2}
                                onChange={this.handleChange} />

                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success">Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

const CalculatorAssignment = () => {
    return (
        <div>
            {/* <CalculatorOne /> */}
            {/* <CalculatorTwo /> */}
            {/* <CalculatorThree /> */}
            <CalculatorFour />
        </div>
    );
};

export default CalculatorAssignment;