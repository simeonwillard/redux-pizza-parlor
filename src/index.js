import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const customerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER':
            return action.payload
        default:
            return state

    }
}




const pizzaList = (state = [], action) => {
    switch(action.type) {
        case 'SET_PIZZA':
            return action.payload;

        default:
            return state;
    }
}






const priceTotalReducer = (state = 0, action) => {

    return state;
}






const ordersReducer = (state = [], action) => {
    return state;
}






const storeInstance = createStore(
    combineReducers({
        ordersReducer,
        priceTotalReducer,
        pizzaList,
        customerReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
