import React, { Component } from 'react';
import Button from './Button';

// class Book extends Component {
//     // state = {
//     //     title: "Test Title",
//     //     authors: ["Tester McTester"],
//     //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non. Elementum sagittis vitae et leo. Neque laoreet suspendisse interdum consectetur libero. Id diam maecenas ultricies mi eget mauris pharetra et. Mattis enim ut tellus elementum sagittis vitae et. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Vulputate mi sit amet mauris commodo. Tristique risus nec feugiat in fermentum. Interdum posuere lorem ipsum dolor sit. Montes nascetur ridiculus mus mauris vitae. Ornare arcu odio ut sem nulla pharetra diam sit amet. Et ultrices neque ornare aenean euismod elementum nisi quis. Et malesuada fames ac turpis egestas maecenas pharetra. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cursus sit amet dictum sit amet justo. Ut placerat orci nulla pellentesque dignissim. Vitae tempus quam pellentesque nec nam aliquam sem et. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.",
//     //     image: "https://via.placeholder.com/200",
//     //     link: "",
//     //     isSaved: false
//     // }

//     render() {
//         return (
//             <div className = "border mb-3">
//                 <div className="row pt-2 pl-2">
//                     <div className="col-10">
//                         <p>{this.props.title}</p>
//                         <p>{this.props.authors}</p>
//                     </div>
//                     <div className="col-2 float-right">
//                         <Button isSaved={this.props.isSaved ? true : false}/>
//                     </div>
//                 </div>
//                 <div className = "row pl-2 pb-2">
//                     <div className = "col-12">
//                         <img src={this.props.image} className = "float-left pr-4" alt={this.props.title}></img>
//                         <div className = "pr-2">{this.props.description}</div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Book;

export default function Book(props) {
    return (
        <div className = "border mb-3">
            <div className="row pt-2 pl-2">
                <div className="col-10">
                    <p>{props.title}</p>
                    <p>{props.authors}</p>
                </div>
                <div className="col-2 float-right">
                    <Button isSaved={props.isSaved ? true : false}/>
                </div>
            </div>
            <div className = "row pl-2 pb-2">
                <div className = "col-12">
                    <img src={props.image} className = "float-left pr-4" alt={props.title}></img>
                    <div className = "pr-2">{props.description}</div>
                </div>
            </div>
        </div>
    )
}