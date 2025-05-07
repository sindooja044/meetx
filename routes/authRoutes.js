const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Register validation
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters'),
  ],
  registerUser
);

// Login validation
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  loginUser
);

module.exports = router;
