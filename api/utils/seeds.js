require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Contacts = require('../models/Contact');

const users = [
  { username: 'admin', password: 'admin123' },
  { firstname: 'Johnny', lastname: 'Doe', username: 'johnny@gmail.com', email: 'johnny@gmail.com', password: 'pass3' },
  { firstname: 'Jane', lastname: 'Doe', username: 'jane@gmail.com', email: 'jane@gmail.com', password: 'pass4' },
  { firstname: 'Josh', lastname: 'Doe', username: 'josh@gmail.com', email: 'josh@gmail.com', password: 'pass6' },
  { firstname: 'Jake', lastname: 'Doe', username: 'jake@gmail.com', email: 'jake@gmail.com', password: 'pass7' },
  { firstname: 'John', lastname: 'Doe', username: 'john@example.com', password: 'password123' },
  { firstname: 'Jane', lastname: 'Doe', username: 'jane@example.com', password: 'password123' },
];

const contacts = [
  { fullname: 'Jack Bean', email: 'jacky@gmail.com', 
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { fullname: 'Red Ryder', email: 'ryder@gmail.com', 
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },  
  { fullname: 'Jupiter Shot', email: 'jupiter@gmail.com', 
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },  
  { fullname: 'Jingle Bear', email: 'jingle@gmail.com', 
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },  
  { fullname: 'Jill Jack', email: 'jill@gmail.com', 
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },  
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing collections
    await User.deleteMany({});
    await Contacts.deleteMany({});

    // Insert users and get user IDs
    const insertedUsers = await User.insertMany(users);
    const userMap = insertedUsers.reduce((map, user) => {
      map[user.username] = user._id;
      return map;
    }, {});

    // Corrected line: 'cont' to 'const'
    const insertedContacts = await Contacts.insertMany(contacts);
    const contactMap = insertedContacts.reduce((map, contact) => {
      map[contact.fullname] = contact._id;
      return map;
    }, {});

    console.log('Users inserted:', insertedUsers);
    console.log('Contacts inserted:', insertedContacts);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
