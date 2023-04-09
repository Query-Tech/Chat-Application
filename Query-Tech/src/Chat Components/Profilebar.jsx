import React from 'react';
import '../css/Profilebar.css';



const Profilebar = () => {
    return (
      <div className="sidebars d-flex flex-column position-relative">
        <div className="top-icons position-absolute d-flex flex-column  mt-5 align-items-center justify-content-around">
        <i className=' icon-bubble picon p-2 fs-4'></i>
        <i className=' la la-phone picon p-2 fs-4 mt-3'></i>
        <i className=' la  la-circle-o picon p-2 fs-4 mt-3'></i>
        </div>
        <div className="bottom-icon position-absolute d-flex flex-column  mb-5 align-items-center justify-content-center">
        <i className=' la la-gear picon fs-4 mb-3 p-2 '></i>
          <div className="d-flex align-items-center p-2 justify-content-center">
            <img className="avatar  fs-4 p-2"src="https://picsum.photos/50"  alt="avatar" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Profilebar;
