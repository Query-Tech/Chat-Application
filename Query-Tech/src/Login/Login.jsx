import React, { useState } from 'react';
import '../css/Login.css';
import { Link} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function UsernameChange(event) {
    setUsername(event.target.value);
  }

  function PasswordChange(event) {
    setPassword(event.target.value);
  }

  function Submit(event) {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  }
 
  return (
 <form  onSubmit={Submit}>
  <div className='d-flex flex-column content-login d-flex justify-content-center  align-items-center'>
        <input className='mt-3 w-100' placeholder='Username' type="text" value={username} onChange={UsernameChange} />
        <input className='mt-3 w-100' placeholder='Password'  type="password" value={password} onChange={PasswordChange} />
      <button className='btn btn-primary fw-bold mt-3 w-100' type="submit">Login</button>
      <Link to="/Resetpassword" className='mt-3'>  <div className='d-flex align-items-center fw-bold pb-2 text-dark text-decoration-none'>Forgot password ?
          </div> </Link> 
      <Link to="/Signup"><button className='btn btn-success fw-bold w-auto mb-3 mt-3'> Create new account </button></Link>
      
    </div>
    </form>

  );
}

export default Login;
