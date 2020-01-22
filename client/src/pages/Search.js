import React, { Component } from 'react';
import Book from '../components/Book';
import '../styles/search.css';

class Search extends Component {
    state = {
        books: [],
        search: "",
        results: []
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        console.log(this.state.search);
    };

    searchBooks = event => {
        event.preventDefault();
        console.log("searching books now");
    }

    render() {
        return (
            <div className = "container">
                <div className = "row search bg-light pl-2 pt-2">
                    <div className="col-12">
                        <h4 className = "mb-4">Book Search</h4>
                        <form className="pt-2">
                            <div className = "form-group">
                                <label htmlFor = "bookSearchInput">Book</label>
                                <input 
                                    type="text" 
                                    className = "form-control" 
                                    id="bookSearchInput" 
                                    placeholder = "Enter Search"
                                    onChange={this.handleInputChange}></input>
                                <button 
                                type = "submit" 
                                className="btn btn-secondary float-right mt-2"
                                onClick={this.searchBooks}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className = "row results bg-light mt-4 pl-2 pt-2">
                    <div className="col-12">
                        <h4 className = "mb-4">Search Results</h4>
                        <Book />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Search;