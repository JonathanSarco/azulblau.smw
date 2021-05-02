import firebase from './firebase';
import 'firebase/storage';

const storage = firebase.storage();
const storageRef = storage.ref()

export const getAllMainPhotos = async () => {
    try {
        const response = await storageRef.child('main/').listAll()
        let urlPromises = response.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(urlPromises)
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const getAllPhotosByArtistsId = async (id) => {
    try {
        const response = await storageRef.child(`artists/${id}/`).listAll();
        let urlPromises = response.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(urlPromises);
    } catch (error) {
        console.log('Error: ', error);
    }
}
