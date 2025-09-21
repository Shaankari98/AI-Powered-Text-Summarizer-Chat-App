import React from 'react';
import ChatBox from './components/ChatBox';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>AI Text Summarizer & Chat</h1>
      <Register />
      <Login />
      <ChatBox />
    </div>
  );
}

export default App;

