import './App.css';
import './Open';
import './Chat Components/Chat'
import Login from './Login/Login'
import SignUp from './Login/Register';
import Forgotpassword from './Login/Forgotpassword';
import Home from './Login/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Login />} />
        <Route path="Resetpassword" element={<Forgotpassword />} />
        <Route path="Signup" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>


  );
}




export default App;
