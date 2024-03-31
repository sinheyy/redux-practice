import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Box from '../component/Box';

const Counter = () => {
    let count = useSelector(state => state.count);
    let name = useSelector(state => state.name);
    let dispatch = useDispatch();
    const [step, setStep] = useState(1);

    const increase = () => {
        dispatch({ type: "INCREMENT", payload: { step: Number(step) } });
    }

    const decrease = () => {
        dispatch({ type: "DECREMENT", payload: { step: Number(step) } });
    }

    const resetCount = () => {
        dispatch({ type: "RESET" });
        setStep(1);
    }

    return (
        <div className='text-area' style={{ background: `url(/background/star2.jpg)` }}>

            <div className='welcome'>WELCOME! {name}</div>
            <div className='count'>{count}</div>
            <div className='button-area'>
                <button className="button" onClick={increase}>
                    <img src="https://cdn-icons-png.flaticon.com/128/9572/9572704.png" />
                </button>
                <button className="button" onClick={decrease}>
                    <img src="https://cdn-icons-png.flaticon.com/128/399/399305.png" />
                </button>
                <button className="button" onClick={resetCount}>
                    <img src="https://cdn-icons-png.flaticon.com/128/15263/15263281.png" />
                </button>
            </div>
            <div>
                <b className='text-step'>✨step: 
                <input className='text-area-input' value={step} type="number" onChange={(e) => setStep(e.target.value)} />✨</b>
            </div>

            <Box />

        </div>
    );
}

export default Counter
