import React, { useEffect } from 'react'
import Footer from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

function Parent() {
    const location = useLocation();
    const params = useParams();
    console.log(location.search.split('&'));

    useEffect (()=>{
        console.log(params);
        const link = location.search.split('&')
        for(let i = 1; i < link.length; i++){
            if(link[i].split('=')[0] === 'start') {
                console.log(link[i].split('=')[1]);
            };
        }
    })
  return (
    <div>
        <Header></Header>
        Parent
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Parent