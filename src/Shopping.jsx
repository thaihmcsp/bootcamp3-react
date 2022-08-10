import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './shop/Cart/Cart';
import Detail from './shop/Detail/Detail';
import Home from './shop/Home/Home';


function Shopping() {
  return (
    <BrowserRouter>
        <div>Shopping</div>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/detail/:productId' element={<Detail/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Shopping