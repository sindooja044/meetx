const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, bookActivity);
router.get('/', auth, getMyBookings);

module.exports = router;
