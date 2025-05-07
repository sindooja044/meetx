const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  // Extract the token from the Authorization header (Bearer token)
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer <token>
  
  // If no token is found, deny access
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the JWT secret from the environment
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the decoded user info to the request object for later use
    req.user = decoded.user;
    
    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // If the token is invalid or expired, deny access
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
