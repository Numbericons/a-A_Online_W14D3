import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, signIn, signOut } from './util/session_api_util'
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});