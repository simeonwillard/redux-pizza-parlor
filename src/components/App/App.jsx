import React from 'react';
import axios from 'axios';
import './App.css';
import Admin from '../Admin/Admin.jsx';
import CustomerForm from '../CustomerForm/CustomerForm';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Sean stuff below
import Checkout from '../Checkout/Checkout.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={PizzaList} />
        <Route path="/customerForm" component={CustomerForm} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
