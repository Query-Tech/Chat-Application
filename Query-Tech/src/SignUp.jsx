import React, { useState } from 'react';
import './Login.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="login-container">
          <h1 className='title'>Create your account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
    
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
    
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
    
            <a href='Login'>
              <button type="submit">Create account</button>
            </a>
            <br />

            <a href='/'>Alreday Have A Account</a>
          </form>
        </div>
  );
}

export default SignUp;
