import React from 'react';
import Counter from './Counter';
import { CounterProvider } from './CounterContext';
import CounterSibling from './CounterSibling';

const CounterRootTwo = () => {
    return (
        <CounterProvider>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterProvider>
    );
};

export default CounterRootTwo;