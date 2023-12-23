const mongoose = require('mongoose');

const pageTransitionSchema = new mongoose.Schema({
  userId: String,
  page: String,
  timestamp: {
    type: Date,
    default: () => new Date().setHours(0, 0, 0, 0), // Set time to midnight
  },
});

const PageTransition = mongoose.model('PageTransition', pageTransitionSchema);

module.exports = PageTransition;
