import React from 'react'

function TodoModal(props) {

    function add () {
        const name = document.querySelector('#name').value;
        const description = document.querySelector('#description').value;
        const deadline = document.querySelector('#deadline').value;
        const amount = document.querySelector('#amount').value;

        props.addJob(name, description, deadline, amount);
    }

    function update () {
        const name = document.querySelector('#name').value;
        const description = document.querySelector('#description').value;
        const deadline = document.querySelector('#deadline').value;
        const amount = document.querySelector('#amount').value;

        props.updateJob(name, description, deadline, amount);
    }

  return (
    <div className={!props.openModel ? 'hideModal' : ''}>
        <input type="text" placeholder='job name' name="" id="name" /> <br />
        <input type="text" placeholder='description' name="" id="description" /> <br />
        <input type="date" name="" id="deadline" /> <br />
        <input type="number" name="" id="amount" /> <br />
        <button onClick={add}>ADD</button>
        <button onClick={update}>UPDATE</button>
        <button onClick={props.deleteJob}>DELETE</button>
        <button onClick={props.hideModal}>CANCEL</button>
    </div>
  )
}

export default TodoModal