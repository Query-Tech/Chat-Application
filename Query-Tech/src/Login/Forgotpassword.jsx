import React, { useState, useEffect } from 'react';
import '../css/Login.css';
import { Link } from "react-router-dom";

function Forgotpassword() {

    const [remainingTime, setRemainingTime] = useState(60);
    const [disabled, setDisabled] = useState(false);
  
    useEffect(() => {
      if (remainingTime === 0) {
        setDisabled(false);
        setRemainingTime(60);
      } else {
        const timerId = setTimeout(() => {
          setRemainingTime(remainingTime - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    }, [remainingTime]);
  
    const OTPClick = () => {
      setDisabled(true);
    };
  
    const buttonText = disabled ? `${remainingTime}` : 'OTP';









    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [OTP, setOTP] = useState('');
  
    function UsernameChange(event) {
      setUsername(event.target.value);
    }
    function PasswordChange(event) {
      setPassword(event.target.value);
    }
    function confirmPasswordChange(event) {
      setConfirmPassword(event.target.value);
    }
    function OTPChange(event) {
        setOTP(event.target.value);
    }
  
  
    function Submit(event) {
      event.preventDefault();

    }

  return (
 <form  onSubmit={Submit}>
        <div className='d-flex flex-column content-login d-flex justify-content-center  align-items-center'>
        <input className='mt-3 w-100' placeholder='Username' type="text" value={username} onChange={UsernameChange} />
        <input className='mt-3 w-100' placeholder='Password'  type="password" value={Password} onChange={PasswordChange} />
        <input className='mt-3 w-100' placeholder='Confirm Password'  type="password" value={confirmPassword} onChange={confirmPasswordChange} />
        <div className='d-flex flex-row justify-content-start w-100'> <input className='mt-3 w-75' placeholder='Enter OTP' type="number" value={OTP} onChange={OTPChange} />
         <button className='btn  btn-primary fw-bold mt-3 w-25 mx-2 otp' type="button"  onClick={OTPClick} disabled={disabled}>{buttonText}</button></div>
       
        <button className='btn btn-primary fw-bold mt-3 w-100' type="submit">Reset password</button>
        <Link to="/">  <div className='d-flex align-items-center fw-bold pb-2 mt-3 text-dark text-decoration-none'>Return to Log in
          </div> </Link> 
    </div>
    </form>

  );
}

export default Forgotpassword;