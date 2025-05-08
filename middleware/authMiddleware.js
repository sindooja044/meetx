// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = function (req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId }; // ✅ Set req.user properly
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
module.exports = authMiddleware;