import React, { useState } from 'react'
import img123 from './images/ADD1.png'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

import { db, auth } from './firebase';

import firebase from './firebase'; // If firebase.js is in the same directory
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const signIn = e => {
       e.preventDefault();

       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // User successfully registered, you can handle the user data here
         
         console.log(userCredential);
         if (auth){
           history('/')
         }
       })
       .catch(error => alert(error.message))   
     
    }

       const register = e =>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User successfully registered, you can handle the user data here
          
          console.log(userCredential);
          if (auth){
            history('/')
          }
        })
        .catch(error => alert(error.message))   
    
    }

    

  return (
    <div className='login'>
    
      <img className="login_logo" src={img123} alt="" />
     


     <div className="login_container">
        <h1>Sign in</h1>

        <form onSubmit={register}>
           <h5>E-mail</h5>
           <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

           <h5>Password</h5>
           <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>


         <button type ='submit' onClick={signIn}className='login_signInButton'>Sign In</button>
        </form>
        <p>
            By signing-in you agree to V'GOGH 
            Conditions of use & sale.
            Please see our Privacy Notice, 
            our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login_registerButton'>Create Your Account</button>
     </div>
    </div>
  )
}

export default Login