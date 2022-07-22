import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormTodo from './FormTodo';
import Todo from './Todo';
import Card from 'react-bootstrap/Card';

function App() {
  const [todos,setTodos] = useState([
    {
      text:'Like the vedio',
      isDone:false
    },

  ]);

  const addTodo = (text) => {
    const newTodos = [...todos,{text,isDone:false}];
    setTodos(newTodos);
  }

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addTodo={addTodo}/>
        <br />
        <div className='todos'>
          {
            todos.map((todo,index)=> (
              <Card>
                <Card.Body>
                <Todo todo={todo} index={index} 
                markTodo={markTodo} deleteTodo={deleteTodo}
                />
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
