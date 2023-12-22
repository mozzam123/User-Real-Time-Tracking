const mongoose = require('mongoose');

const pageTransitionSchema = new mongoose.Schema({
  userId: String,
  page: String,
  timestamp: { type: Date, default: Date.now }
});

const PageTransition = mongoose.model('PageTransition', pageTransitionSchema);

module.exports = PageTransition;
