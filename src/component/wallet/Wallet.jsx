import React, { useEffect, useState } from 'react'
import '../../App.css'
import HeaderExpense from './HeaderExpense'
import ListExpense from './ListExpense'
import ModalExpense from './ModalExpense'
import { Link } from 'react-router-dom';
let x = 1
function Wallet() {
    const [expense, setExpense] = useState([
        {money: 100000, expense: true, note: 'an', date: '2022-07-21'},
        {money: 50000, expense: false, note: 'an', date: '2022-07-20'},
        {money: 50000, expense: false, note: 'an', date: '2022-07-21'},
    ]);

    useEffect(()=>{
        let inter = setInterval(() => {
            console.log(x++);
        }, 1000)   

        return () => { clearInterval(inter)};
    })

    return (
        <div className='container'>
            <HeaderExpense expense={expense}/>
            <ListExpense expense={expense}/>
            <Link to='/'>home</Link>
            <ModalExpense/>
        </div>
    )
}

export default Wallet