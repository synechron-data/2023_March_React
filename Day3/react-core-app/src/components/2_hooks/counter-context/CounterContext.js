import React, { useReducer, useContext } from 'react';

export const CounterContext = React.createContext();

export const counterActions = {
    increment: 'increment',
    decrement: 'decrement'
};

export function CounterProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    const providerValue = { counterState: state, counterDispatch: dispatch };

    return (
        <CounterContext.Provider value={providerValue}>
            {children}
        </CounterContext.Provider>
    );
}

export function useCounter() {
    const context = useContext(CounterContext);

    if(!context) {
        throw new Error("useCounter Hook must be used within CounterProvider");
    }

    return context;
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