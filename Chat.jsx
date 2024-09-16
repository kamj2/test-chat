import React, { useState } from 'react';

function Chat({ name, messages, addMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage({ name, text: message }); // نضيف الرسالة ككائن يحتوي على الاسم والنص
      setMessage(''); // إعادة تعيين الرسالة بعد الإرسال
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p><strong>{msg.name}</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="message-input">
        <input
          className="text"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="send">Send</button>
      </form>
    </div>
  );
}

export default Chat;
