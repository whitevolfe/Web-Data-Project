import React , {useState} from 'react';
import {Form,Button} from 'react-bootstrap';

function FormTodo({addTodo}) {
  const [value,setValue] = useState(''); 
  const handleSubmit = (e) =>{
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('')

  }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label><b>Add Todo</b></Form.Label>
            <Form.Control
            type='text'
            className='input'
            value={value}
            onChange={e=>setValue(e.target.value)}
            placeholder='Enter Todo' 
            />
        </Form.Group>
        <br />

        <Button type='Submit'>Submit</Button>
        
    </Form>
  )
}

export default FormTodo