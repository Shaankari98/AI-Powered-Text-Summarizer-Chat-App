import React, { useState } from 'react';
import API from '../api';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await API.post('/auth/login', form);
        localStorage.setItem('token', res.data.token);
        alert('Logged in successfully!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    )
}
