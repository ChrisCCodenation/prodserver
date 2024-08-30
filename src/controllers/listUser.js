// User model for Sequelize database.
const User = require("../db/models/userModel");

// List all users from the database.
const listUsers = async (req, res) => {
  try {
    
// Get users from the database.
    const listOfAllusers = await User.findAll({});

// Show assigned code and listed users.
    res.status(200).json({
      message: "List of all users in the table is as follows:",
      userlist: listOfAllusers
    });
  } catch (error) {
   
// Show errors that appear.
    console.log(error);

// Show assigned error code if process fails.
    res.status(500).json({ error_message: error });
  }
};


module.exports = listUsers;
