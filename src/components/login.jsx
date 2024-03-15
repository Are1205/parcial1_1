import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const pass = '1234';
const user = 'admin';


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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password)
    if (username === user && password === pass) {
      console.log('Usuario y contraseña válidos');
      setError(false);
      navigate('/vehiculos');
    } else {
      setError(true);
    }
    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario</label>
        <input 
          type="text" 
          id="username" 
          placeholder="Nombre de usuario" 
          value={username} 
          onChange={handleUsernameChange} 
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={handlePasswordChange} 
        />
      </div>
      <div>
          <button type="submit">Ingresar</button>
        <button type="reset">Cancelar</button>
      </div>
      <div>
        {error && <p>El usuario o la contraseña no son válidos</p>}
      </div>
    </form>
  );
}

export default LoginForm;
