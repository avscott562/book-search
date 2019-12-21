import React, { Component } from 'react';
import Book from '../components/Book';

class Search extends Component {
    state = {
        book: [],
        search: ""
    }

    render() {
        return (
            <div>
                <h1>Search page</h1>
                <Book />
            </div>
        )
    }
    
}

export default Search;