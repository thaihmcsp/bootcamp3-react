import React from 'react'

function TodoList(props) {
  return (
    <div>
        <table>
            <tbody>
                {props.listData.map(function(value, index){
                    return (
                        <tr key={index} onClick={ () => {props.getIndex(index)}}>
                            <td>{value.name}</td>
                            <td>{value.description}</td>
                            <td>{value.amount}</td>
                            <td>{value.deadline}</td>
                        </tr>
                    )
                })}
            
            </tbody>
        </table>
        
    </div>
  )
}

export default TodoList