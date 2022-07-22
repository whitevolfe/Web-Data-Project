import React from 'react'
import Button from 'react-bootstrap/Button';
import './Todo.css'

function Todo({todo,index,markTodo,deleteTodo}) {
    const{text,isDone} = todo;
  return (
    <div className='todo'>
        <span style={{textDecoration: isDone ? 'line-through' :''}}>{text}</span>
        <div className='todo_button'>
        <Button onClick={()=>markTodo(index)}>{isDone ? 'NotDone':'Done'}</Button>
        <Button variant="danger" onClick={()=>deleteTodo(index)}>Delete</Button>
        </div>
        
    </div>
  )
}

export default Todo