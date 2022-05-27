import React, { useContext } from 'react';
import { counterContext } from '../../counterContext';

const Counter = () => {
    const {increment, counter, decrement} = useContext(counterContext)
    return (
        <div>
            <button onClick={() => decrement(counter)}>-1</button>
            <h1>Counter: {counter}</h1>
            <button onClick={() => increment(counter)}>+1</button>
        </div>
    );
};

export default Counter;