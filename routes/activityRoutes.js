const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route to get all activities
router.get('/', activityController.getActivities);

// Protected route to book an activity (with authentication middleware)
router.post('/book/:activityId', authMiddleware, activityController.bookActivity);
// Route to get all bookings of the logged-in user
router.get('/my-bookings', authMiddleware, activityController.getMyBookings);


module.exports = router;
