// For table fields and formatting.
const SQLconnection = require("../connection");
const {DataTypes}= require("sequelize")
// User model form database.
const User = SQLconnection.define("User", {
  
// User ID fields.
  user_id: {
    type: DataTypes.BIGINT,      
    autoIncrement: true,         
    primaryKey: true,            
    unique: true,                
    allowNull: false             
  },
  
// Username fields
  username: {
    type: DataTypes.STRING,      
    unique: true,                
    allowNull: false             
  },
  
// Email fields
  email: {
    type: DataTypes.STRING,     
    unique: true,                
    allowNull: false             
  },
  
// Password fields
  password: {
    type: DataTypes.STRING,      
    unique: false                
  }
});


module.exports = User;
