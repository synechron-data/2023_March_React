import React, { useReducer } from 'react';

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
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" readOnly value={state.count} />
                <button className="btn btn-info"
                    onClick={e => { dispatch({ type: counterActions.increment, payload: 10 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={e => { dispatch({ type: counterActions.decrement, payload: 10 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

// Insert Action
// type: Insert
// payload: {id:1, name:"Manish"}

const CounterNew = () => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h2 className='text-primary'>
                    {state.count}
                </h2>
                <button className="btn btn-primary"
                    onClick={e => { dispatch({ type: counterActions.increment, payload: 5 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary"
                    onClick={e => { dispatch({ type: counterActions.decrement, payload: 5 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};


const ReducerHookDemo = () => {
    return (
        <>
            <Counter />
            <hr />
            <CounterNew />
        </>
    );
};

export default ReducerHookDemo;