import React from 'react';
import './Login.css';

function ForgetPassword() {
  return (
    <div className="login-container">
      <h1 className="title">Forgot your password?</h1>
      <p className="description">Enter your email address below and we'll send you a link to reset your password.</p>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit" className="submit-button">Send Password Reset Email</button>
      </form>
    </div>
  );
}

export default ForgetPassword;
