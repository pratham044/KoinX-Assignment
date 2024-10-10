require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { scheduleFetchJob } = require("./scheduleJob");
const routes = require("./routes");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const app = express(); // Initialize Express app

app.use("/api", routes); // Use routes

scheduleFetchJob(); // Start the scheduled job to fetch crypto data

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

