const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('connected to subscriptionsDB')
  } catch (error) {
    console.error(error)
  }
}

module.exports = connectDB
