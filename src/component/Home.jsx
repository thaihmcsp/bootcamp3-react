import React  from 'react'
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>Home
        {props.count}
        <button onClick={props.up}>click</button>
        <Link to='/wallet'>wallet</Link>
    </div>
  )
}

export default Home