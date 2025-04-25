//import the user schema
// const UserData = require('./Models/db.schema');// Import the UserData model
const UserData = require('../Models/db.schema'); // Import the UserData model

//Functions for the CRUD operations

//post method to create a new user
 const createUser = async (req, res) => {
    try {
        const user_creation = await UserData.create(req.body);
        res.status(201).json(user_creation); //using 201 beacuse 201 status code is used when a new resource is created
      } catch (err) {
        res.status(500).json({ message: err.message }) //status code 500 is used for server error or internal error
      }
  }
  
//get method for get the user data and view it
const user_data_getting = async (req, res) => {
    try {
        const user_data_getting = await UserData.find({});
        res.status(200).json(user_data_getting);
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}
 
//Using Get method fetch the single data only from data base
const SingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const single_user_data = await UserData.findById(id);
        res.status(200).json(single_user_data,{message: 'user not found'});
    
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}
//update the user data using put method
const UpdateUser = async (req, res) => { 
    try {
        const { id } = req.params;
        //find the user by id and update the data using findByIdAndUpdate method
        const update_user_data = await UserData.findByIdAndUpdate(id, req.body,);
        if (!update_user_data) {
          return res.status(404).json({ message: 'user not found' })
        }
        const updates_product = await UserData.findById(id);
        res.status(200).json(update_user_data);
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}

//delete the user data using delete method
const DeleteUser = async (req, res) => {
     try {
        const { id } = req.params;
        //find the user by id and delete the data using findByIdAndDelete method
        const delete_user_data = await UserData.findByIdAndDelete(id);
        if (!delete_user_data) {
          return res.status(404).json({ message: 'user not found' })
        }
        res.status(200).json({message: 'user deleted successfully'});
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}
//export the functions to use in the routes
module.exports = { createUser, user_data_getting, SingleUser, UpdateUser, DeleteUser };