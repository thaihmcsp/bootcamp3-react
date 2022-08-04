import React from 'react'

function DailyExpenseList(props) {

    return (
    <div>
        <div>{props.daily[0].date}</div>
        <div>
            {props.daily.map((value, index) => {
                return (
                    <div key={index} className='expenseItem'>
                        <div>{value.note}</div>
                        <div>{(value.money * (value.expense ? -1 : 1)).toLocaleString()}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DailyExpenseList