import React, { useState, useEffect } from 'react';
import API from '../api';

export default function ChatBox() {
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const res = await API.get('/chat');
        setChats(res.data);
    }

    useEffect(() => { fetchChats(); }, []);

    const handleSend = async () => {
        if (!message) return;
        const res = await API.post('/chat', { message });
        setChats([res.data, ...chats]);
        setMessage('');
    }

    return (
        <div>
            <h2>AI Chat</h2>
            <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                {chats.map((chat, index) => (
                    <div key={index} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc' }}>
                        <p><b>You:</b> {chat.message}</p>
                        <p><b>AI:</b> {chat.aiResponse}</p>
                    </div>
                ))}
            </div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" />
            <button onClick={handleSend}>Send</button>
        </div>
    )
}
