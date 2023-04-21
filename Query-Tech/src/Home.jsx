
import QueryTech from './querytech.png';
import { Outlet } from "react-router-dom";
import './Login.css';

function Home() {
  return (
    <div className='w-50 d-lg-flex container mt-5 pt-lg-5' class='login-container'>
      <div className='w-50 h-50  d-lg-flex justify-content-center d-none titlehome  align-items-start'>
        <div className='d-flex justify-content-center h-100  fs-1 fw-bold align-items-center'>
          <img src={QueryTech} alt='QueryTech' width={400} height={150} border-radius={50} class="d-lg-flex justify-content-lg-center align-items-lg-center"/>
        </div>
      </div>

      <div className='w-50 d-lg-none justify-content-center d-flex flex-column align-items-center'>
        <div className='d-flex justify-content-center h-100 fs-1 fw-bold align-items-center'>
          
        </div>
        <div className='d-flex justify-content-center h-50 fs-1 fw-bold align-items-center'>
        </div>
      </div>
 
      <div className='w-50 d-flex justify-content-center mt-5  pt-lg-5 align-items-center'>
      <Outlet />
      </div>
    </div>
  );
}

export default Home;