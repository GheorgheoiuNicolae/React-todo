import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
// Initialize Firebase
var config = {
  apiKey: "AIzaSyClyqYdKjwiNh6MYB3aQdAcirJ2ppxzce4",
  authDomain: "everlist-f2ba5.firebaseapp.com",
  databaseURL: "https://everlist-f2ba5.firebaseio.com",
  storageBucket: "everlist-f2ba5.appspot.com",
  messagingSenderId: "1054249488306"
};
firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
