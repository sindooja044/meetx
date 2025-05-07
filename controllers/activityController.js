
const Activity = require('../models/Activity');

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
  try {
    const activityId = req.params.id;  // Extract the activity ID from the route parameter
    const userId = req.user._id;  // Assuming user information is added by authentication middleware

    // Logic to book an activity (this could include saving the booking to a database)
    // For now, let's assume we are just returning a successful message.
    // You can expand this logic to actually store booking info.

    // Example (you could replace this with real booking logic):
    // const booking = await Booking.create({ activityId, userId });
    
    res.status(200).json({ message: 'Activity booked successfully', activityId, userId });
  } catch (err) {
    console.error('Error booking activity:', err);  // Log full error details
    res.status(500).json({ message: 'Server error', error: err.message });  // Send error message to client
  }
};