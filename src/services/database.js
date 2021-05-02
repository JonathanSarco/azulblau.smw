import axios from './axios';

export const getDataFromArtistId = async (id) => {
    try {
        
        const response = await axios.get('/' + id + '.json');
        return response.data;
    } catch (error) {
        console.log('Error: ', error);
    }
}