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
    try {
        const response = await storageRef.child('george_rose/').listAll()

        let urlPromises = response.items.map(imageRef => imageRef.getDownloadURL());

        return Promise.all(urlPromises)
    } catch (error) {
        console.log('Error: ', error);
    }
}