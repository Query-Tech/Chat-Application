import React, { useState, useEffect } from 'react';
import Main from './Chat Components/Main';
import './querytech.png';
function OpeningAnimation() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 1000);
  }, []);

  return (
    <div className="openlayout">
      {showLogo ? <img className='open' alt="Logo" /> : <Main />}
    </div>
  );
}


export default OpeningAnimation;
