import React, { useContext } from 'react'
import context from '../../context/context'
import ContextProvider from '../../context/ContextProvider'
import Level4 from './Level4'

function Level3(props) {
    const data = useContext(context);
    console.log(8, data);
  return (
    <ContextProvider value= {{test3: 'day la level 3', ...data}}>
        <h3>Level3</h3>
        <Level4/>
    </ContextProvider>
  )
}

export default Level3