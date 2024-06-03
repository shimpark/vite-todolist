// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/store';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [passwd, setPasswd] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(username));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwd"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
