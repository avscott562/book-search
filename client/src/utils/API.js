import { API_KEY } from 'dotenv';
import axios from 'axios';

export default {
    // search for books
    searchBooks: function(search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`);
    },

    // get all books from database
    getBooks: function() {
        return axios.get('/api/books');
    },

    // add new book to database
    addBook: function(bookData) {
        return axios.post('/api/books', bookData);
    },

    // delete book from database
    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    }
};