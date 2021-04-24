import firebase from 'firebase/app';
import 'firebase/storage';

// Set the configuration for your app
// TODO: Replace with your app's config object
let firebaseConfig = {
  apiKey: "AIzaSyBjaC91evo46oQ4k7_gTltsqOh-sbMql3A",
  authDomain: "azulblau-swm.firebaseapp.com",
  databaseURL: "https://azulblau-swm-default-rtdb.firebaseio.com",
  projectId: "azulblau-swm",
  storageBucket: "azulblau-swm.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const storageRef = storage.ref()


export const getAllPhotos = async () => {
    let urlPhotos = [];

    try {
        const response = await storageRef.child('george_rose/').listAll()
        if (response) {
            response.items.forEach(async item => {
                const url = await item.getDownloadURL();
                urlPhotos.push(url);
            });
        }        
        return urlPhotos;
    } catch (error) {
        console.log('Error: ', error);
    }
}