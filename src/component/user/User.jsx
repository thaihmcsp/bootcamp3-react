import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { register } from '../redux/actions/userAction';
import {Link} from 'react-router-dom'

function User() {
    const dispatch = useDispatch();
    const data = useSelector( function (state) {
        console.log(state);
        return state.user;
    })

    function registerUser (){
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        console.log(username, password);
        // let object= {type: 'user/register', payload: {username, password}}
        let action = register({username, password})
        dispatch(action)
    }

    return (
        <div>User
            
            <input type="text" id='username'/>
            <input type="text" id='password'/>
            <button onClick={registerUser}>register</button>
            <Link to='/level'>level</Link>
            {data.map((value, index)=>{
                return <div key={index}> {value.username}</div>
            })}
        </div>
    )
}

export default User