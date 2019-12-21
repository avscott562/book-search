import React from 'react';

function Button(props) {
    return (
        <div>
            <button className = "btn btn-outline-secondary btn-sm">View</button>
            <button className = "btn btn-outline-secondary btn-sm ml-2">{props.isSaved === false ? "Save" : "Delete"}</button>
        </div>
    )
}

export default Button;