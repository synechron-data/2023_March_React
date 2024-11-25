import React, { useCallback, useState } from 'react';

// React.memo is a Higher Order Component, that prevents a component from re-rendering 
// if the props (or values within it) have not changed.
const Counter = React.memo((props) => {
    console.log("Counter Rendered: ", props.children);
    return (
        <button className='btn btn-primary' onClick={props.handleClick}>
            {props.children}
        </button>
    );
});

const CallbackHookDemo = () => {
    const [incCount, setIncrementer] = useState(0);
    const [decCount, setDecrementer] = useState(0);

    // const increment = () => { setIncrementer(incCount + 1); }
    // const decrement = () => { setDecrementer(decCount - 1); }

    const increment = useCallback(() => { setIncrementer(incCount + 1); }, [incCount]);
    const decrement = useCallback(() => { setDecrementer(decCount - 1); }, [decCount]);

    return (
        <div className='text-center mt-5'>
            <h2 className="text-primary">
                {incCount}
            </h2>
            <Counter handleClick={increment}>
                Incrementer
            </Counter>
            <hr />
            <h2 className="text-primary">
                {decCount}
            </h2>
            <Counter handleClick={decrement}>
                Decrementer
            </Counter>
        </div>
    );
};

export default CallbackHookDemo;


    // var a = 10;
    // console.log(a);
    // console.log(typeof a);

    // var f = function () {
    //     console.log("Hello");
    // };
    // console.log(f);
    // console.log(typeof f);

    // var f1 = function () {
    //     console.log("Hello");
    // };
    // var f2 = function () {
    //     console.log("Hello");
    // };
    // console.log(f1 === f2);