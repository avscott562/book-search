import React, { Component } from 'react';

class Book extends Component {
    state = {
        title: "Test Title",
        author: "Tester McTester",
        summary: "Summary of the book test title.",
        image: "https://via.placeholder.com/150"
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <p>{this.state.title}</p>
                        <p>{this.state.author}</p>
                    </div>
                    <div className="col-3">
                        <button className = "btn btn-outline-secondary btn-sm">View</button>
                        <button className = "btn btn-outline-secondary btn-sm ml-2">Save</button>
                    </div>
                </div>
                
                <p><img src={this.state.image} className = "float-left"></img>
                <span className = "pl-3">{this.state.summary}</span></p>
            </div>
        )
    }
}

export default Book;