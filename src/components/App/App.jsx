import React from 'react';
import axios from 'axios';
import './App.css';
import Admin from '../Admin/Admin.jsx';
import CustomerForm from '../CustomerForm/CustomerForm';
import Header from '../Header/Header';

// Sean stuff below
import Checkout from '../Checkout/Checkout.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <CustomerForm />
      <Admin />
    </div>
  );
}

export default App;
