const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const errorHandler = require('./middleware/errorHandler');  // Import error handler

const app = express();

app.use(cors());
app.use(express.json());  // Parse JSON request bodies

// Set up API routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handler middleware (must be after routes)
app.use(errorHandler);

module.exports = app;
