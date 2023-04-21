import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx';
import ForgetPassword from './ForgetPassword.jsx';
import './App.css';
import './Login.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
          <Route path="/" element={<Login />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="signup" element={<SignUp />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
