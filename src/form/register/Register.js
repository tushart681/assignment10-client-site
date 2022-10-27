import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';
import { authContext } from '../../context/authprovider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(authContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
      form.reset()
      setError('')
      navigate('/')
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    })
  }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>your name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter name" required/>
          <Form.Label>photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Load photo" required/>
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Link to={'/form/login'}>Click Here to Login</Link>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Register;