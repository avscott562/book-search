import React from 'react';

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {

    }

    render() {
        return(
            <div className="container">
                <h1>Saved Results</h1>
                <div className="row mt-4">
                    <div className="col-12">
                        books
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved;