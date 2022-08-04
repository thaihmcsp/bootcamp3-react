import React from 'react'
import { useContext } from 'react'
import context from '../../context/context'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'

function Level5(props) {
    const user = useSelector( function (state) {
        return state.user;
    } )
    const data = useContext(context)
    console.log(7, data);
    return (
        <div>
            Level5 {data.test}
            <Link to='/user'>user</Link>
            {user.map((value, index)=>{
                return <div key={index}> {value.username}</div>
            })}

        </div>
    )
}

export default Level5