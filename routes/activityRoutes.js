const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const authMiddleware = require('../middleware/authMiddleware'); // Import JWT auth middleware

// ✅ Public route to get all activities
router.get('/', activityController.getActivities);

// ✅ Protected route to book an activity
router.post('/book/:id', authMiddleware, activityController.bookActivity);

module.exports = router;
