// api/routes/users.js

const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../utils/auth');
const adminOnly = require('../utils/adminOnly');
const router = express.Router();


// POST route for user registration
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user
    user = new User({
      username,
      email,
      password, // Ideally, you should hash the password before saving
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// POST route for user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Check if the password matches (assuming it's hashed)
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token (assuming you have a function for this)
    const token = user.generateAuthToken(); // Custom method on user model

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// POST route to update user profile (auth required)
router.post('/profile', authenticateToken, async (req, res) => {
  try {
    const { username, email } = req.body;

    // Find the user by ID (from the token) and update their information
    const user = await User.findByIdAndUpdate(req.user._id, { username, email }, { new: true });

    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// DELETE route to delete user account (auth required)
router.delete('/profile', authenticateToken, async (req, res) => {
  try {
    // Find and delete the user by ID (from the token)
    await User.findByIdAndDelete(req.user._id);
    res.json({ message: 'User account deleted successfully' });
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Admin Route to Get All Users (with password field excluded for security)
router.get('/admin/users', authenticateToken, adminOnly, async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password field
    res.json({ users });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Public Route to Get All Users (username and isAdmin fields only)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'username isAdmin'); // Select only relevant fields
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to Get User Count
router.get('/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
