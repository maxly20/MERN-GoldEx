const express = require('express');

const app = express();

const dbconnection = require('./db');

app.get('/', (req, res) => {
  res.send('this is from the backend');
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));
