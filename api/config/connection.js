require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI; // This will now include the database name

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;


/**
 * 
 *MONGODB_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
*MONGODB_URI=mongodb+srv://carolwargo:8DyaILn1LnL4Ttql@cluster0.jplhrrc.mongodb.net/recruit?retryWrites=true&w=majority&appName=Cluster0

 * const mongoose = require('mongoose');

// Replace <username>, <password>, and <dbname> with your actual MongoDB credentials and database name
const mongoURI = 'mongodb+srv://<username>:<password>@your-cluster.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

 */