import mongoose from "mongoose";

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
let BookSchema = new Schema({
  // book title
  title: {
    type: String,
    required: true
  },
  // book authors
  authors: {
    type: Array,
    required: true
  },
  // book description
  description: {
    type: String,
    required: true
  },
  // book image
  image: {
    type: String,
    required: true
  },
  // link to Google Book page
  link: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
let Book = mongoose.model("Book", BookSchema);

// Export the Article model
module.exports = Book;