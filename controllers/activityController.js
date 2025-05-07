exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    console.error('Error fetching activities:', err);  // Log full error details
    res.status(500).json({ message: 'Server error', error: err.message });  // Send error message to client
  }
};
