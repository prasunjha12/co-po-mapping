// login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className='centered-container'>
      <div className='login-box'>
        <div>
          <img src={require('./aiub-logo.jpg')} alt="AIUB Logo" />
          <h1>PSG COLLEGE OF TECHNOLOGY</h1>
        </div>
        <div className='heading2'>
          <h2>Welcome to Staff Zone!</h2>
        </div>
        <div className='loginbox'>
          <h3>Staff Login</h3>
          <form>
            <div className='input-container'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='input-container1'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='button' onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
