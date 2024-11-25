import React, { useReducer, useContext } from 'react';

export const CounterContext = React.createContext();
export const CounterDispatchContext = React.createContext();

export const counterActions = {
    increment: 'increment',
    decrement: 'decrement'
};

export function CounterProvider({ children }) {
    const [counter, dispatch] = useReducer(counterReducer, counterState);

    return (
        <CounterContext.Provider value={counter}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    );
}

export function useCounter() {
    return useContext(CounterContext);
}

export function useCounterDispatch() {
    return useContext(CounterDispatchContext);
}

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