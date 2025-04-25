const express = require('express');
const app = express()
const mangoose = require('mongoose');
// Import dotenv to load environment variables
const env=require('dotenv').config(); 

//middleware to parse json data from the request body
app.use(express.json());

// Import the user routes
const UserRoutes = require('./routes/UserData.Routes');

// Use the user routes in the app
app.use('/api', UserRoutes); // Prefix all routes with /api

// This is the main entry point of the application

//check in which port server is running
app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000');
});

// reference the URI from .env
const uri = process.env.MONGODB_URI;

//connect to mongodb
mangoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));



