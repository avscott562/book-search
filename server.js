// Require Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// link apiRoutes file
let apiRoutes = require("./routes/apiRoutes");

// set up the express app
const PORT = process.env.PORT || 5100;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use('/api/books', apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
  