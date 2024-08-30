// Import the bcrypt library for hashing passwords
const bcrypt = require("bcrypt");

// User model for Sequelize database.
const User = require("../db/models/userModel");

// Check the user's password.
const checkPassword = async (req, res, next) => {
  try {
    
// Get the plain text password.
    const plainTextPassword = req.body.password;
    console.log(plainTextPassword);

// Get user's details from the database via email.
    const userDetails = await User.findOne({
      where: { email: req.body.email } 
    });
    console.log(userDetails);

// Get password from 
    const hashedPassword = userDetails.password;
    console.log(hashedPassword);

// Compare the plain text password with the hashed password using bcrypt
    const check = await bcrypt.compare(plainTextPassword, hashedPassword);
    console.log(check);

// If the password matches, proceed to the next middleware function
    if (check === true) {
      next();
    } else {
// If the password doesn't match, send a response indicating incorrect password
      res.status(400).send("Password incorrect");
    }
  } catch (error) {

// Log any errors that occur during the password check process
    console.log(error);

// Respond with an error message if something goes wrong
    res.status(500).json({
      message: "Oops, something went wrong...",
      errorMessage: error
    });
  }
};


module.exports = checkPassword;
