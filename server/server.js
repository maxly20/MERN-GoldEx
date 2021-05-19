const express = require('express');

const app = express();

app.use(express.json());

const dbconnection = require('./db');
const productsRoute = require('./routes/productsRoute');

app.use('/api/products', productsRoute);

app.get('/', (req, res) => {
  res.send('this is from the backend');
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));
