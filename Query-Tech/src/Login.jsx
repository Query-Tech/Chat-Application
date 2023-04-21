import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
    <div className="login-container">
      <h1 className='title'>Login</h1>
      <p>Don't Have A Account? <Link to='signup'>SignUp</Link></p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
        <br />
        <p>Didn't remember my password? <Link to='forgetpassword'>ForgetPassword</Link></p>
      </form>
    </div>
  );
}

export default Login;
