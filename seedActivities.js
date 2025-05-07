const mongoose = require('mongoose');
const Activity = require('./models/Activity');  // Adjust the path if needed

mongoose.connect('mongodb://localhost:27017/activity_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");

  const activities = [
    {
      title: 'Cricket Match',
      description: 'A fun cricket match for all ages.',
      location: 'Stadium A',
      date: '2025-05-15',
      time: '14:00',
    },
    {
      title: 'Football Match',
      description: 'A thrilling football match.',
      location: 'Stadium B',
      date: '2025-05-16',
      time: '16:00',
    },
    {
      title: 'Movie Night',
      description: 'Watch the latest blockbuster movies.',
      location: 'Cineplex',
      date: '2025-05-20',
      time: '19:00',
    },
  ];

  // Insert sample activities into the database
  Activity.insertMany(activities)
    .then(() => {
      console.log('Activities seeded successfully!');
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error('Error seeding activities:', err);
      mongoose.connection.close();
    });
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
