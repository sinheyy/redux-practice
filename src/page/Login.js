import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [nick, setNick] = useState("");

    const login = () => {
        dispatch({ type: "LOGIN", payload: { name: nick } })
        navigate("/counter");
    }

    const enter = (e) => {
        if (e.key == "Enter") {
            login();
        }
    }

    return (
        <div className='login-area' style={{background: `url(/background/background2.jpg)`}}>
            <div className='login-text'>LET'S COUNT STARS!</div>
            <div>
                <input className='login-area-input' value={nick} placeholder="닉네임을 입력해주세요" onChange={(e) => setNick(e.target.value)} onKeyPress={(e) => (enter(e))} />
                <button className='login-button' onClick={login}>
                    <img src="https://cdn-icons-png.flaticon.com/512/106/106773.png" />
                </button>
            </div>
        </div>
    )
}

export default Login
