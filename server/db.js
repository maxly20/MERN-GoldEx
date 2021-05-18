const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const dbconnect = mongoose.connection;

dbconnect.on('error', () => {
  console.log('Mongo DB Connection Failed');
});

dbconnect.on('connected', () => {
  console.log('Mongo DB Connection Successful');
});

module.exports = mongoose;
