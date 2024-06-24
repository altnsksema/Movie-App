import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = ({ isOpen, toggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Email ve Şifre gereklidir');
  }
};


  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}> Login </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">E-mail  </Label>
                <Input
                type="email"
                name="email"
                id="email"
                placeholder="Please enter your e-mail:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password  </Label>
                <Input
                type="password"
                name="password"
                id="password"
                placeholder="Please enter your password:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleLogin}>Login</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>

    </Modal>



  )
}

export default Login;
