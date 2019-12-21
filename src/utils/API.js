require('dotenv').config();
import axios from 'axios';

export default {
    //get requets go here
    findBooks: function(search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.API_KEY}`);
    }
}