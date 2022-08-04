import React from 'react'
import context from '../../context/context'
import ContextProvider from '../../context/ContextProvider'
import Level2 from './Level2'

let data = {key: 123, test: 'level 1'}

function Level1() {
  return (
    <ContextProvider value={data}>
        <h1>Level1</h1>
        <Level2> <p>test 12321321321</p> </Level2>
    </ContextProvider>
  )
}

export default Level1