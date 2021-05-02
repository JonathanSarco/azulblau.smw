import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyBjaC91evo46oQ4k7_gTltsqOh-sbMql3A",
  authDomain: "azulblau-swm.firebaseapp.com",
  databaseURL: "https://azulblau-swm-default-rtdb.firebaseio.com",
  projectId: "azulblau-swm",
  storageBucket: "azulblau-swm.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;