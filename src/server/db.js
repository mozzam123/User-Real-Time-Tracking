const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const DB = process.env.DATABASE;
    await mongoose.connect(DB);
    console.log("Database connected for Real Time Trcking service");
  } catch (error) {
    console.log("Error occured while connecting DB: ", error);
  }
};

module.exports = connectDB
