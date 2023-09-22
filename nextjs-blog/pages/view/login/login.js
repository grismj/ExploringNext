import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router'

export default function Login() {
  const [user, setUser] = useState();
  const router = useRouter()
  const userRef = useRef(null);
  const sesionClick = ()=>{
    console.log('VALOR',userRef.current.value)
  //  e.preventDefault()
  localStorage.setItem("username", userRef.current.value);
  router.push('/view/home/home')
   // setUser(inputRef.current.value)
   // console.log("VALUE INPUT", inputRef.current.value)
    //console.log()
    
  }

  return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsuario">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Enter user" ref={userRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={sesionClick}>
          Iniciar sesión
        </Button>
      </Form>
  );
}
