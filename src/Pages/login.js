import React, { useState } from 'react';
import { Dropdown, Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginRole, setLoginRole] = useState('');

  const handleLoginClick = (role) => {
    setLoginRole(role);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="app-container">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Log in
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="dropdown-category">Patients</div>
          <Dropdown.Item onClick={() => handleLoginClick('Patients')}>Log in</Dropdown.Item>
          <Dropdown.Divider />
          <div className="dropdown-category">Doctors</div>
          <Dropdown.Item onClick={() => handleLoginClick('Doctors')}>Log in</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Modal for login details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{loginRole} Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
