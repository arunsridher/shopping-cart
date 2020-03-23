import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDx0-E3r5GaVZ7VZ7WkVcwlviZ2bAQR1q0",
  authDomain: "cart-72976.firebaseapp.com",
  databaseURL: "https://cart-72976.firebaseio.com",
  projectId: "cart-72976",
  storageBucket: "cart-72976.appspot.com",
  messagingSenderId: "637051756275",
  appId: "1:637051756275:web:f66ca43821ec43b87be186"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);