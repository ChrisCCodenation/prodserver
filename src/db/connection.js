// Class from Sequelize.
const { Sequelize } = require("sequelize");

// New Sequelize URI from .env.
const SQLconnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {host: process.env.DB_HOST,
  dialect: process.env.DIALECT}
);
try {
  
// Authenticate to database
  SQLconnection.authenticate();

// Show assigned message if successful.
  console.log("Successfully connected to Database");
} catch (error) {
  
// Show any errors when attempting connection.
  console.log(error);
}


module.exports = SQLconnection;
