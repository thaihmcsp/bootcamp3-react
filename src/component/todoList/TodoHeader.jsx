import React from 'react'

function TodoHeader(props) {
  return (
    <div>
        <h1>
            Daily job 
            <button onClick={props.showModal}>+</button>
        </h1>
    </div>
  )
}

export default TodoHeader