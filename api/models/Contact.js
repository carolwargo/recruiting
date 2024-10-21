const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
