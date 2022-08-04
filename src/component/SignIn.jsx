import React from 'react'
import {useNavigate} from 'react-router-dom'

function SignIn() {
    const nav = useNavigate();

    function login () {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        if(!email || !password) {
            return alert('vui long dien du thong tin');
        }
        nav('/');
    }
  return (
    <div>
        SignIn
        <input type="text" name="" id="email" />
        <input type="text" name="" id="password" />
        <button onClick={login}>click</button>
    </div>
  )
}

export default SignIn