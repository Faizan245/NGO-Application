import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../CSS/login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('https://ngo-application-z8ni.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const json = await response.json()
      console.log(json)
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      
      localStorage.setItem('username', username)
      
      localStorage.setItem('token', json.authToken)
      
      localStorage.setItem("sessionId", json.sessionId);
      localStorage.setItem('userId', json.user_id);
      localStorage.setItem('role', json.role);
         
      if (json.role === 'Member') {
        navigate('/member');
    } else if (json.role === "Admin") {
        navigate('/admin');
    }    
      // If login is successful, you can redirect the user to another page
      // Or you can handle the success in any other way as per your requirement
      console.log('Login successful');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <a href='/'><p>Home</p></a>
      <div className='form-containerL'>
        <h2>Login</h2>
        
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='lgnBtn' type="submit">Login</button>
            <a href='/signup'>New User? Sign Up</a>
          </div>

        </form>
      </div>

    </>
  );
};

export default Login;
