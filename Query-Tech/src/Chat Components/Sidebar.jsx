import { useState } from 'react';
import React from 'react';
import '../css/Sidebar.css';

const chats = [
  {
    id: 1,
    name: 'maker Doe',
    message: 'Hey, what\'s up?',
    count:1,
    time: '11:30 PM',
    selected:false,
    unread: true
  },
  {
    id: 2,
    name: 'Jane Doe',
    message: 'Can you send me th',
    time: '10:45 PM',
    count:100,
    selected:true,
    unread: false
    
  },
  {
    id: 3,
    name: 'Bob Smith',
    message: 'Did you get th',
    time: '9:30 PM', 
    count:1,
    selected:false,
    unread: true
  },
  {
    id: 4,
    name: 'John Doe',
    message: 'Hey, what\'s up?',
    time: '11:30 PM',
    count:1,
    selected:false,
    unread: true
  },
  {
    id: 5,
    name: 'Jane Doe',
    message: 'Can you send me the report?',
    time: '10:45 PM',
    count:1,
    selected:false,
    unread: false
  },
  {
    id: 6,
    name: 'Bob Smith',
    message: 'Did you get the tickets?',
    time: '9:30 PM',
    count:1,
    selected:false,
    unread: true
  },
  {
    id: 7,
    name: 'John Doe',
    message: 'Hey, what\'s up?',
    time: '11:30 PM',
    count:1,
    selected:false,
    unread: true
  },
  {
    id: 8,
    name: 'Jane Doe',
    message: 'Can you send me the report?',
    time: '10:45 PM',
    count:1,
    selected:false,
    unread: false
  },
  {
    id: 9,
    name: 'Bob Smith',
    message: 'Did you get the tickets?',
    time: '9:30 PM',
    count:10,
    selected:false,
    unread: true
  },
  {
    id: 10,
    name: 'John Doe',
    message: 'Hey, what\'s up?',
    time: '11:30 PM',
    count:1,
    selected:false,
    unread: true
  },
  {
    id: 11,
    name: 'Jane Doe',
    message: 'Can you send me the report?',
    time: '10:45 PM',
    count:1,
    selected:false,
    unread: false
  },
  {
    id: 12,
    name: 'Bob sa',
    message: 'Did you get the tickets?',
    time: '9:30 PM',
    count:1,
    selected:false,
    unread: true
  }
];

const MobileSidebar = () => {
  return (
      <div className="chats">
        {chats.map((chat) => (
          <div className={`chat ${chat.selected ? 'selected' : ''}`} key={chat.id}>
            <div className="profile-picture">
              <img src="https://picsum.photos/50" alt={chat.name} />
            </div>
            <div className="chat-details">
              <div className="chat-name">{chat.name}</div>
              <div className="last-message">{chat.message}</div>
            </div>
            <div className={`${chat.unread ? 'unread' : ''}`}>
                <div className="time top-0">{chat.time}</div>
                <div className="d-flex   justify-content-end count-ht  mt-2"><span className={`${chat.unread ? 'count' : 'counts'}`}>{chat.count}</span></div>            
            </div>

          </div>
        ))}
      </div>
   
  );
};


const NoResultsMessage = () => (
  <div className="d-flex justify-content-center align-items-center h-100">
    No results found.
  </div>
);

const Sidebar = () => {
  const [searchText, setSearchText] = useState('');

  const filteredChats = chats.filter(
    (chat) => chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="sidebar">
      <div className="search-bar">
        <div className="search-bar-top d-flex">
          <div className="w-75">
            <span className="fs-4 fw-bold text-dark">Chats</span>
          </div>

          <div className="px-3 py-2 rounded-3 edit">
            <i className="far fa-edit"></i>
          </div>
          <div className="px-3 py-2 rounded-3 edit">
            <i className="icon-options"></i>
          </div>
        </div>
        <div className="mt-2">
          <input
            type="search"
            placeholder="Search or start a new chat"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="chats">
        {filteredChats.length === 0 ? (
          <NoResultsMessage />
        ) : (
          filteredChats.map((chat) => (
            <div className={`chat ${chat.selected ? 'selected' : ''}`} key={chat.id}>
              <div className="profile-picture">
                <img src="https://picsum.photos/50" alt={chat.name} />
              </div>
              <div className="chat-details">
                <div className="chat-name">{chat.name}</div>
                <div className="last-message">{chat.message}</div>
              </div>
              <div className={`${chat.unread ? 'unread' : ''}`}>
                <div className="time top-0">{chat.time}</div>
                <div className="d-flex justify-content-end count-ht mt-2">
                  <span className={`${chat.unread ? 'count' : 'counts'}`}>
                    {chat.count}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export {Sidebar,MobileSidebar};
