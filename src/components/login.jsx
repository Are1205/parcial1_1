import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Col } from 'react-bootstrap';
import './styles/login.css';
import { FormattedMessage } from 'react-intl';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: username,
        password: password
      })
    });

    if (response.ok) {
      setError(false);
      navigate('/vehiculos');
    }
    else {
      setError(true);
    }
  }

  return (
    <Col className = 'col-login'>
        <div className='div-login'>
          <h2 className='titulo-login'>
            <FormattedMessage id='login' />
          </h2>
        </div>
        <Form onSubmit={handleSubmit} className='login'>
          <Form.Group controlId="username">
            <Form.Label className='label-login'>
              <FormattedMessage id='user' />
            </Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className={error ? 'input-login input-error' : 'input-login'}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className='label-login'>
              <FormattedMessage id='passwor' />
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={error ? 'input-login input-error' : 'input-login'}
            />
          </Form.Group>
          <div className='botones'>
            <Button className='ingresar' type="submit">
                <FormattedMessage id='login-btn' />
              </Button>
              <Button className='cancelar' type="reset">
                <FormattedMessage id='cancel-btn' />
              </Button>
          </div>
          {error && <Alert  className='alerta' variant="danger">Error de autenticación. Revise sus credenciales</Alert>}
        </Form>
    </Col>
  );
}

export default LoginForm;
