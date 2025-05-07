const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route to get all activities
router.get('/', activityController.getActivities);

// Protected route to book an activity (with authentication middleware)
router.post('/book/:id', authMiddleware, activityController.bookActivity);

module.exports = router;
