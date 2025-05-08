
const Activity = require('../models/Activity');
const Booking = require('../models/Booking');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    console.error('Error fetching activities:', err);  // Log full error details
    res.status(500).json({ message: 'Server error', error: err.message });  // Send error message to client
  }
};

exports.bookActivity = async (req, res) => {
  const { activityId } = req.params;
  const { userId } = req.user; // Assuming the user is attached via authMiddleware

  try {
    // Optional: Check if the activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Create new booking
    const newBooking = new Booking({
      activity: activityId,
      user: userId,
      bookingDate: new Date(), // You could allow users to pick a date too
    });

    // Save booking to database
    await newBooking.save();

    // Respond with success
    res.status(201).json({ message: 'Activity booked successfully', booking: newBooking });
  } catch (err) {
    console.error('Error booking activity:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  const { userId } = req.user; // Get the userId from the JWT token

  try {
    // Fetch all bookings for the logged-in user
    const bookings = await Booking.find({ user: userId }).populate('activity');

    // If no bookings found, return a message
    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found' });
    }

    // Respond with the list of bookings
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
