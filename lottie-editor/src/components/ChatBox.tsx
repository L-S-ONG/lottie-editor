import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Chat</h2>
      <div className="h-64 overflow-y-scroll mb-4 p-2 border border-gray-300 rounded">
        {messages.map((message, index) => (
          <div key={index} className="p-2 border-b border-gray-200">{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <button onClick={handleSendMessage} className="p-2 bg-blue-500 text-white rounded w-full">Send</button>
    </div>
  );
};

export default ChatBox;
