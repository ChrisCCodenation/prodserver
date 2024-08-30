// User model for Sequelize database.
const User = require("../db/models/users");

// Import the bcrypt library for hashing passwords
const bcrypt = require("bcrypt");

// Updating the user's password
async function updatePassword(req, res) {
  try {
    
// Get the number of salt rounds from the database.
    const saltRounds = parseInt(process.env.SALT_ROUNDS);

// Hashed the new password provided.
    const hashedNewPassword = await bcrypt.hash(req.body.newPassword, saltRounds);

// Log the password to the console.
    console.log(hashedNewPassword);

// Update the user's password in the database.
    const result = await User.update(
      { password: hashedNewPassword }, 
      { where: { email: req.body.email } }
    );

// Log the result of the update.
    console.log(result);

// Show message for "updated".
    res.status(200).json({
      message: "Password updated",
      results: result
    });
  } catch (error) {
    
// Show errors
    console.log(error);

// Show assigned error code for failed update.
    res.status(500).json({
      message: "Oops, password not updated",
      errorMessage: error
    });
  }
}


module.exports = updatePassword;
