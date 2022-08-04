import React from 'react'
import Level3 from './Level3'

function Level2(props) {
    console.log(5, props);
    return (
        <div>
            <h2>Level2 {props.data}</h2>
            {props.children}
            <Level3 data={props.data}></Level3>
        </div>
    )
}

export default Level2