import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'
import Home from './component/Home';
import SignIn from './component/SignIn';
import './component/todoList/todo.css';
import Wallet from './component/wallet/Wallet';
import Parent from './component/Parent';
import Child from './component/Child';
import ShowData from './component/axios/ShowData';
import Test from './component/antd/Test';
import { Pagination } from 'antd';
import Info from './component/antd/Info';
import User from './component/antd/outlet/User';
import Order from './component/antd/outlet/Order';
import Level1 from './component/nested/Level1';
import data from './data.json'
import User1 from './component/user/User'
console.log(data);

function App () {
    

    const [count, setCount] = useState(0)
    console.log(count);
    function up (){
        setCount(count + 1);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Parent/>}>
                    <Route path='/show-data' element={<ShowData/>}/>
                    <Route path='/' element={<Home count={count} up={up}/>}/>
                    <Route path='/parent/:id/:userId' element={'test'}/>
                    <Route path='/child' element={<Child/>}/>
                    <Route path='/wallet' element={<Wallet/>}/>
                    <Route path='/test' element={<Test/>}/>
                    <Route path='/user' element={<User1/>}/>
                </Route>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path ='/level' element={<Level1/>}/>

                <Route path='/user' element={<Info/>}>
                    <Route path='info' element={<User/>}/>
                    <Route path='order' element={<Order/>}/>
                    <Route path='show-data' element={<ShowData/>}/>
                </Route>

                <Route path='*' element={<h1>404 Error .not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
