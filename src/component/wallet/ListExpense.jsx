import React, { useEffect, useState } from 'react'
import DailyExpenseList from './DailyExpenseList';

function ListExpense(props) {
    const [listExpenseDaily, setListExpenseDaily] = useState ([])

    useEffect(function(){
        var data = {}
        for(let i = 0; i < props.expense.length; i++){
            let date = props.expense[i].date;
            if(!data[date]) {
                data[date] = [props.expense[i]];
            }else{
                data[date].push(props.expense[i]);
            }
        }
        let list = []
        for (const key in data) {
            list.push(data[key])
        }
        setListExpenseDaily(list);
    }, [props.expense])

    return (
        <div>
            {listExpenseDaily.map(function(expense, index){
                return <DailyExpenseList key={index} daily = {expense}/>
            })}
        </div>
    )
}

export default ListExpense