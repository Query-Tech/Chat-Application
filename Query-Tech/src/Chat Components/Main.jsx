
import Chat from './Chat';
import {Sidebar,MobileSidebar} from './Sidebar';
import Profilebar from './Profilebar';
import Headers from './Title';
import Mobilebar from './Mobilebar';
import React from 'react';

import '../css/Main.css';

const Main = ()=>{
    return(
<> 
<div className='d-lg-flex d-none flex-column'>
 <div><Headers /></div> 
 <div className='d-flex ' >
 <Profilebar />
 <div className='d-flex w-100 widget'>
 <Sidebar />    
<Chat />
</div>
</div>
                 
            </div>
  
<div className='d-lg-none d-flex flex-column'>
<Mobilebar />   
<MobileSidebar />    
</div>
  
  </>  
  
  
  )
}  

export default Main
