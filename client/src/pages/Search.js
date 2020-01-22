import React, { Component } from 'react';
import Book from '../components/Book';
import '../styles/search.css';

class Search extends Component {
    state = {
        searchedBooks: [
            {
                title: "Test My Title",
                authors: ["Tester McTester", "Test 2 Author"],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non. Elementum sagittis vitae et leo. Neque laoreet suspendisse interdum consectetur libero. Id diam maecenas ultricies mi eget mauris pharetra et. Mattis enim ut tellus elementum sagittis vitae et. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Vulputate mi sit amet mauris commodo. Tristique risus nec feugiat in fermentum. Interdum posuere lorem ipsum dolor sit. Montes nascetur ridiculus mus mauris vitae. Ornare arcu odio ut sem nulla pharetra diam sit amet. Et ultrices neque ornare aenean euismod elementum nisi quis. Et malesuada fames ac turpis egestas maecenas pharetra. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cursus sit amet dictum sit amet justo. Ut placerat orci nulla pellentesque dignissim. Vitae tempus quam pellentesque nec nam aliquam sem et. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.",
                image: "https://via.placeholder.com/200",
                link: ""
            },
            {
                title: "Test Title",
                authors: ["Tester John McTester"],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non. Elementum sagittis vitae et leo. Neque laoreet suspendisse interdum consectetur libero. Id diam maecenas ultricies mi eget mauris pharetra et. Mattis enim ut tellus elementum sagittis vitae et. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Vulputate mi sit amet mauris commodo. Tristique risus nec feugiat in fermentum. Interdum posuere lorem ipsum dolor sit. Montes nascetur ridiculus mus mauris vitae. Ornare arcu odio ut sem nulla pharetra diam sit amet. Et ultrices neque ornare aenean euismod elementum nisi quis. Et malesuada fames ac turpis egestas maecenas pharetra. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cursus sit amet dictum sit amet justo. Ut placerat orci nulla pellentesque dignissim. Vitae tempus quam pellentesque nec nam aliquam sem et. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.",
                image: "https://via.placeholder.com/200",
                link: ""
            },{
                title: "Test Title",
                authors: ["Tester Rob McTester", "Test 3 Author"],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non. Elementum sagittis vitae et leo. Neque laoreet suspendisse interdum consectetur libero. Id diam maecenas ultricies mi eget mauris pharetra et. Mattis enim ut tellus elementum sagittis vitae et. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Vulputate mi sit amet mauris commodo. Tristique risus nec feugiat in fermentum. Interdum posuere lorem ipsum dolor sit. Montes nascetur ridiculus mus mauris vitae. Ornare arcu odio ut sem nulla pharetra diam sit amet. Et ultrices neque ornare aenean euismod elementum nisi quis. Et malesuada fames ac turpis egestas maecenas pharetra. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cursus sit amet dictum sit amet justo. Ut placerat orci nulla pellentesque dignissim. Vitae tempus quam pellentesque nec nam aliquam sem et. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.",
                image: "https://via.placeholder.com/200",
                link: ""
            }
        ],
        search: ""
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
                        {this.state.searchedBooks.length ? (
                            <div>
                            {this.state.searchedBooks.map(book => (
                                <Book 
                                  key={book._id}
                                  title={book.title}
                                  authors={book.authors}
                                  description={book.description}
                                  image={book.image}
                                  link={book.link}
                                />
                            ))}
                            </div>
                        ) : 
                        (
                            <p>No results found.</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Search;