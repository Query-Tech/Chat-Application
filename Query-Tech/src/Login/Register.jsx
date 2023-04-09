import React, { useState } from 'react';
import { Link } from "react-router-dom";
function SignUp() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function UsernameChange(event) {
    setUsername(event.target.value);
  }
  function PasswordChange(event) {
    setPassword(event.target.value);
  }
  function confirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }
  function firstNameChange(event) {
    setFirstName(event.target.value);
  }
  function lastNameChange(event) {
    setLastName(event.target.value);
  }





  const Submit = (e) => {
    e.preventDefault();

      console.log('Sign up successful!');
    
  };

  return (
    <form  onSubmit={Submit}>
    <div className='d-flex flex-column content-login d-flex justify-content-center  align-items-center'>
          
          <input className='mt-3 w-100' placeholder='First Name' type="text" value={firstName} onChange={firstNameChange} />
          <input className='mt-3 w-100' placeholder='Last Name' type="text" value={lastName} onChange={lastNameChange} />
          <input className='mt-3 w-100' placeholder='Phone Number or Email id' type="text" value={Username} onChange={UsernameChange} />
          <input className='mt-3 w-100' placeholder='Password'  type="password" value={Password} onChange={PasswordChange} />
          <input className='mt-3 w-100' placeholder='Confirm Password'  type="password" value={confirmPassword} onChange={confirmPasswordChange} />
        <button className='btn btn-success fw-bold w-auto w-100 px-3 mb-3 mt-3'> Sign up </button>
    <Link to="/">  <div className='d-flex align-items-center fw-bold pb-2 text-dark text-decoration-none'>Already a User ? Log in
          </div> </Link> 
      </div>
      </form>
  );
}
 
export default SignUp;
