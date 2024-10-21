// api/routes/contact.js

const express = require('express');
const adminOnly = require('../utils/admin');
const router = express.Router();
const Contact = require('../models/Contact');
const User = require('../models/User');


// Route to handle contact form submission
router.post('/contact', async (req, res) => {
    try {
      const { fullname, email, message } = req.body;
  
      // Check if required fields are provided
      if (!fullname || !email || !message) {
        return res.status(400).json({ error: 'Fullname, email, and message are required' });
      }
  
      // Find or create the user
      let user = await User.findOne({ email });
      if (!user) {
        user = new User({
          fullname,
          email,
          password: null, // Optional, as this user is created without a password
          isAdmin: false,
        });
        await user.save();
      }
  
      // Create a new contact message
      const newContact = new Contact({
        fullname,
        email,
        message,
        user: user._id,
      });
      await newContact.save();
  
      res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
      res.status(500).json({ error: 'Failed to submit inquiry' });
    }
  });
  
  module.exports = router;



  