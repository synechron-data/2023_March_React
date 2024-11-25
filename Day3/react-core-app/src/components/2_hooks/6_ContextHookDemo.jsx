import React, { useContext, useReducer } from 'react';

const CounterContext = React.createContext();

const counterActions = {
    increment: 'increment',
    decrement: 'decrement'
};

const counterState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case counterActions.increment:
            return { count: state.count + (action.payload || 1) };
        case counterActions.decrement:
            return { count: state.count - (action.payload || 1) };
        default:
            throw new Error("Invalid Action Executed....");
    }
}

const Counter = () => {
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" readOnly 
                    value={context.counterState.count} />
                <button className="btn btn-info"
                    onClick={e => { context.counterDispatch({ type: counterActions.increment, payload: 10 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={e => { context.counterDispatch({ type: counterActions.decrement, payload: 10 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

const CounterSibling = () => {
    const context = useContext(CounterContext);

    return (
        <>
            <div className="text-center">
                <h3 className="text-primary">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6 text-center">
                <h2 className='text-primary'>
                    Current Count is: {context.counterState.count}
                </h2>
            </div>
        </>
    );
};

const ContextHookDemo = () => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <CounterContext.Provider value={{ counterState: state, counterDispatch: dispatch }}>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterContext.Provider>
    );
};

export default ContextHookDemo;