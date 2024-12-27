// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/todoapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

// Import dotenv to load environment variables
require('dotenv').config();
const mongoose = require("mongoose");

// Access the MONGO_URI from the environment variables
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB using the URI from .env file
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error: ", err));

