const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbUrl = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(dbUrl);
    console.log(`MongoDB Connected : ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

module.exports = connectDB;
