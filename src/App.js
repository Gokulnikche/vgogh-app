import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Orders from './Orders';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';

const promise = loadStripe('pk_test_51OBzSxSC64NM4zpvr0Raix6Qp6HeYWguq23O5KsxhFCkVWNCY7Rpgl1u75jjpm541gFDygNrzx9XoYjjv55STz8b00FwRKLlc9');

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/Orders' element={<><Orders /><Footer /></>} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={<><Header setSearchTerm={setSearchTerm} /><Home searchTerm={searchTerm} /><Footer /></>}
          />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route
            path='/payment'
            element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
