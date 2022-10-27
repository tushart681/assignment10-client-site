import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { authContext } from '../../context/authprovider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(authContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const handlesignIn = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      form.reset()
      setError('')
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    })
  }
    return (
        <Form onSubmit={handlesignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link to={'/form/register'}>Click Here to Register</Link>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Login;