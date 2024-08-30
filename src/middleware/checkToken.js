// Import JSONWEBTOKEN library.
const jwt = require("jsonwebtoken");

// User model for Sequelize database.
const User = require("../db/models/userModel");
 
// Checking and verifying JWT tokens
async function checkToken(req,res,next) {
    try {
        
// Extract authorization token by removing Bearer.
        const token = req.header("Authorization").replace("Bearer ","");
        
// Private key from database.
        const privateKey = process.env.JWT_KEY;
        
// Decode token and retrieve user data.
        const decodedtoken = await jwt.verify(token,privateKey);
        
// Debugging for errors.
        console.log(decodedtoken);
        
// Get users email from from token.
        const userEmail = decodedtoken.email;
        
// See if user is in the database
        const checkUserExists = await User.findOne({where:{email:userEmail}});
        
// Show error code if no user is found.
        if (checkUserExists === false) {
            throw new Error("User no longer in database")
        } else {
            
// If the user is in the database add their email.
            req.body.email = userEmail;
            next()
        }

// Show errors and lookup users. Give assigned error code.
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Token Check Failed",
            errorMessage: error
        })
       
    }
}
 
module.exports = checkToken