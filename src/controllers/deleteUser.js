// User model for Sequelize database.
const User = require("../db/models/userModel");

// Delete a user from the database
async function deleteUser(req, res) {
  try {
    
// Delete the user from the database if the email matches the body.
    const result = await User.destroy({
      where: { email: req.body.email }
    });

// Show the result of the deleted email.
    console.log(result);

// Show assigned code for deleted user.
    res.status(200).send(`User ${req.body.email} Deleted`);
  } catch (error) {
    
// Show any errors for deleted users.
    console.log(error);

// Show assigned error code if deleting fails.
    res.status(500).json({
      message: "Delete failed",
      errorMessage: error
    });
  }
}


module.exports = deleteUser;
