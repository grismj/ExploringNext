import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../home/home';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState(null);
  this.state = {
    value: 'Please write an essay about your favorite DOM element.'
  };
  const sesionClick = ()=>{
    e.preventDefault()
    console.log("VALUE INPUT")
    console.log(e.target.value)
    //setUser()
  }

  return (
    <userContext.Provider value={user}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsuario">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Enter user" value={this.state.value}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sesionClick}>
          Iniciar sesión
        </Button>
      </Form>
      <Home></Home>
    </userContext.Provider>
  );
}
