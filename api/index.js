require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/connection'); // Import the connection function

const app = express();

// Connect to the database
connectDB();

// Define a simple route to test if the server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
