import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { fetchAllPosts } from './actions/index';
const store =createStore(rootReducer,applyMiddleware(thunk));

store.dispatch(fetchAllPosts());
ReactDOM.render(<Provider store={store}> <App />
</Provider>, document.getElementById('root'));

// If you want your app to work and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

