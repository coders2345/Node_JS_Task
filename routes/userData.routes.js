//This file contains the routes for the user data
// and the functions to handle the requests and responses
const express = require('express');
// Import the express module to create a router
const router = express.Router();
const { createUser, user_data_getting, SingleUser, UpdateUser, DeleteUser } = require('../Controllers/User_Data.Controllers'); // Import the controller functions

router.post('/', createUser); // Route to create a new user
router.get('/', user_data_getting); // Route to get all users
router.get('/:id', SingleUser); // Route to get a single user by ID
router.put('/:id', UpdateUser); // Route to update a user by ID
router.delete('/:id', DeleteUser); // Route to delete a user by ID

module.exports = router; // Export the router for use in the main app
