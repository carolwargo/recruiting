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



/**MONGODB_URI=mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.jplhrrc.mongodb.net/recruit?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=1HERE|2!S*3@|4SECRET*5KEYno
 */