// Import JSONWEBTOKEN library.
const jwt = require("jsonwebtoken");

// User login and create JWT token.
async function login(req, res) {
  try {
    
// Token expiry time.
    const expirationTime = 1000 * 60 * 60 * 24 * 7;

// Set the token options, including the expiration time
    const options = {
      expiresIn: expirationTime
    };

// Token from database for username and email.
    const payload = {
      email: req.body.email,
      username: req.body.email
    };

// Private key from database.
    const privateKey = process.env.JWT_KEY;

// Token from database for private key.
    const token = jwt.sign(payload, privateKey, options);

// Add token for debugging.
    console.log(token);

// Show assigned code for created token.
    res.status(200).json({
      message: "JWT Token created",
      token: token,
      email: req.body.email
    });
  } catch (error) {
    
// Show for any errors that occur.
    console.log(error);

// Show assigned code for login error.
    res.status(500).json({
      message: "Login error",
      errorMessage: error
    });
  }
}


module.exports = login;
