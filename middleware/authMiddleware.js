// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach the user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
