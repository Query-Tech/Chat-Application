import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faWindowRestore ,faPowerOff} from '@fortawesome/free-solid-svg-icons';
import '../css/Title.css';
import '../logo-white.png'

const Headers = () => {
   const [Fullscreen, setFullscreen] = useState(false);


   const handleFullscreen = () => {
      const element = document.documentElement;
      if (!document.fullscreenElement) {
        element.requestFullscreen().catch((err) => {
          console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
        setFullscreen(true)
      } else {
        document.exitFullscreen();
        setFullscreen(false)
      }
    };
    return (

      
      <>
      
      <div className=" title d-flex flex-row">
         <div className='w-50 d-flex flex-row align-items-center justify-content-start'><img className='logo' alt="Query-Tech" />
         <span className='px-2 fs-5 fw-semibold'>Query-Tech</span></div>
         
     <div className='w-50 d-flex flex-row align-items-center justify-content-end'>  
     <div className="titleico py-3 d-flex justify-content-center align-items-center px-3 mx-1 my-2" onClick={handleFullscreen}>
      <FontAwesomeIcon icon={Fullscreen ? faWindowMaximize : faWindowRestore} /></div>
     <div className="titleico py-3 d-flex justify-content-center align-items-center px-3  my-2"><FontAwesomeIcon  icon={faPowerOff} /></div>
       
      </div>
   
 </div>
    </>
    );
  }; 
  
  export default Headers;
