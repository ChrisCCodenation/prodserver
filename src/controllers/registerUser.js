// User model for Sequelize database.
const User = require("../db/models/userModel");

// Import the bcrypt library for hashing passwords.
const bcrypt = require("bcrypt");

// Register a new user.
async function registerUser(req, res) {
  try {
    
// Add new user to the database.
    const user = await User.create({
      username: req.body.username, 
      email: req.body.email,       
      password: req.body.password  
    });

// Show assigned code for created user.
    res.status(201).json({message:`User ${req.body.username} has been created.`});
  } catch (error) {
    
// Show errors
    console.log(error);

// Show assigned code for failed registration.
    res.status(418).json({
      msg: "Database Error",
      error: error
    });
  }
}


module.exports = registerUser;
