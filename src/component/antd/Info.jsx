import React from 'react'
import { Outlet } from 'react-router-dom'
import InfoMenu from './Menu'

function Info() {
  return (
    <div className='info-page'>
        <InfoMenu/>
        <Outlet/>
    </div>
  )
}

export default Info