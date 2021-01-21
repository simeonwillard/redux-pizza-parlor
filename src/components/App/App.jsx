import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
      <CustomerForm />
    </div>
  );
}

export default App;
