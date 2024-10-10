const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI;

// Function to connect to MongoDB
async function connectDB() {
  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
}

module.exports = { connectDB };
