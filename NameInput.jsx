import React, { useState } from 'react';
import "./Name.css";

function NameInput({ onSubmit }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName) onSubmit(inputName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='loops-co'>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button type="submit">Join Chat</button>
      </div>
    </form>
  );
}

export default NameInput;
