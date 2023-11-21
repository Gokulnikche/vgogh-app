import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import img123 from './images/ADD1.png';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

 

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/register', { username, password });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  const handleLogin = async () => {
    try {
     
      setToken('dummy-token');
      console.log('Login successful');
  
     
      navigate("/");
      console.log('Navigating to the home page.');
    } catch (error) {
      console.error('Error logging in:', error);
  
      
      if (error.response) {
       
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };
  
  return (
    <div className='login'>
      <img className="login_logo" src={img123} alt="" />
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        <br />
        <form>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <br />
        <button onClick={handleLogin} className="login_signInButton">
          Sign In
        </button>
        <p>
          By signing-in you agree to V'GOGH Conditions of use & sale. Please see our Privacy Notice,
          our Cookies Notice, and our Interest-Based Ads Notice.
        </p>
        <button onClick={handleRegister} className="login_registerButton">
          Create Your Account
        </button>
        {token && <div className="login-token">Token: {token}</div>}
      </div>
    </div>
  );
};

export default Login;
