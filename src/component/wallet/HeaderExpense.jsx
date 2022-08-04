import React, { useEffect, useState } from 'react'

function HeaderExpense(props) {
    const [total, setTotal] = useState(0);

    useEffect(function (){
        var sum = 0;
        for(let i = 0; i < props.expense.length; i++){
            sum += props.expense[i].money * (props.expense[i].expense ? -1 : 1);
        }
        setTotal(sum);
    }, [props.expense]);

    return (
        <div>Cash: {total.toLocaleString()}</div>
    )
}

export default HeaderExpense