/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../css/Chat.css';
import Call from './Mini Components/call'
import VedioCall from './Mini Components/VedioCall'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faMicrophone} from '@fortawesome/free-solid-svg-icons';

const messages = [
  { content: 'Hsds', time: '10:30 AM', sent: true },
  { content: 'I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!I\'m good, thanks for asking!', time: '10:35 AM', sent: false },
  { content: 'How about you?', time: '10:36 AM', sent: false },
  { content: 'I\'m doing great too!', time: '10:40 AM', sent: true },
  { content: 'How about you?', time: '10:36 AM', sent: false },
  { content: 'I\'m doing great too!', time: '10:40 AM', sent: true },
  { content: 'How about you?', time: '10:36 AM', sent: false },
  { content: 'I\'m doing great too!', time: '10:40 AM', sent: true },
  { content: 'How about you?', time: '10:36 AM', sent: false },
  { content: 'I\'m doing great too!', time: '10:40 AM', sent: true },
  { content: 'ags', time: '10:40 AM', sent: true }
];

const Chat = () =>  {
  const [InputChange, setInputChange] = useState('');
  const handleChange = (e) => {
    setInputChange(e.target.value);
  };



  return (
    <div className="chat-window">
      <div className="chat-header d-flex flex-row ">
     <div className=" headico py-2 px-2  d-lg-none"> <i className="fas fa-arrow-left"></i></div>
        <img className="avatar" src="https://picsum.photos/50" />
        <div className="contact-info w-50 d-flex flex-column ">
          <div className="name">Lucifer Morningstar</div>
          <div className="status"></div>
        </div>
        <div className="contact-info w-50   d-flex justify-content-end">
        
            <VedioCall />
         <Call />
          <div className="line d-none d-lg-block"></div>
          <div className="headico px-lg-3 py-lg-2 d-none d-lg-block  mx-lg-2  "><i className="la la-search fs-2"></i></div>
        
      
        </div>
      </div>
    


      <div className="chat-messages">
      {messages.map((message, index) => (
        <div key={index} className={`message m-2 px-3 py-2 ${message.sent ? 'sent' : 'received'}`}>
          <div className="message-content">{message.content}</div>
          <div className="message-time mt-1">{message.time}</div>
        </div>
      ))}
    </div>
  

 <div>

 </div>
      <div className="chat-input d-flex align-items-center ">
      <div className="headico py-lg-3 d-flex justify-content-center mx-2 align-items-center px-lg-3" >
        <i className="icon-emotsmile fs-5"></i>
      </div>

      
          <div className="headico py-lg-3 d-flex justify-content-center align-items-center px-lg-3 mx-2">
            <i className="icon-paper-clip fs-5"></i></div>
          <div className="inputbox py-lg-3 d-flex justify-content-center align-items-center  mx-lg-1 ">
             <input className='w-100'  type="text"  value={InputChange}   onChange={handleChange}  placeholder="Type your message" /></div>
          <div className="headico py-lg-3 d-flex justify-content-center align-items-center px-lg-3 mx-2">
          <FontAwesomeIcon icon={InputChange ? faPaperPlane: faMicrophone}  /></div>
   

      </div>
    </div>
  );
};

export default Chat;
