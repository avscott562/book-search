import React, { Component } from 'react';
import Book from '../components/Book';

class Saved extends Component {
    state = {
        savedBooks: []
    }

    render() {
        return (
            <div className = "container">
                <div className = "row results bg-light mt-4 pl-2 pt-2">
                    <div className="col-12">
                        <h4 class = "mb-4">Saved Books</h4>
                        <Book />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Saved;