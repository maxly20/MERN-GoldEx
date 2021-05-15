const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");


const mongoDBURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`