import React from 'react';
import { useCounter, counterActions } from './CounterContext';

const Counter = () => {
    const context = useCounter();

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

export default Counter;