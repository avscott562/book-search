import React, { Component } from 'react';
import Book from '../components/Book';

class Saved extends Component {
    state = {
        savedBooks: []
    }

    render() {
        return (
            <div>
                <h1>Saved page</h1>
                <Book />
            </div>
        )
    }
    
}

export default Saved;