import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import NameInput from './NameInput';
import "./App.css";

function App() {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleSetName = (newName) => {
    setName(newName);
    localStorage.setItem('username', newName); 
  };

  const addMessage = (message) => {
    setMessages([...messages, message]); // نستخدم الكائن message مباشرة
  };
  
  return (
    <div className="App">
      {!name ? (
        <NameInput onSubmit={handleSetName} />
      ) : (
        <Chat name={name} messages={messages} addMessage={addMessage} />
      )}
    </div>
  );
}

export default App;
