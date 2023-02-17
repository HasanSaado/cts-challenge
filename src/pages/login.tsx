// Libraries
import React, { useState, useEffect } from 'react';

// Components
import { Form, Button } from "react-bootstrap";

export default function LoginPage() {
  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /**
   *
   */
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault()

    if ('admin' === username && 'admin123' === password) {
      localStorage.setItem('token', 'token')
      alert('Login successful')
      window.location.href = '/dashboard'
    } else {
      alert('Please check your username and password')
    }
  }

  /**
   *
   */
  return (
    <div className="app container login-form d-flex align-items-center">
      <Form
        onSubmit={handleSubmit}
        className="w-sm-100 w-md-50 m-auto"
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="danger"
          type="submit"
          disabled={!validateForm()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
