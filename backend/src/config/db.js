const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB using URI from .env
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;