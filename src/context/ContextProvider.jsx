import React from 'react'
import context from './context'

const Provider = context.Provider;

function ContextProvider(props) {
    console.log(props);
    return (
        <Provider value={props.value}>
            {props.children}
        </Provider>
    )
}

export default ContextProvider