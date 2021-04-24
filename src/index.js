import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase/app';

// // Set the configuration for your app
// // TODO: Replace with your app's config object
// var firebaseConfig = {
//   apiKey: "AIzaSyBjaC91evo46oQ4k7_gTltsqOh-sbMql3A",
//   authDomain: "azulblau-swm.firebaseapp.com",
//   databaseURL: "https://azulblau-swm-default-rtdb.firebaseio.com",
//   projectId: "azulblau-swm",
//   storageBucket: "azulblau-swm.appspot.com",
// };

// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
