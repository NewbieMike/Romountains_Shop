const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const productsRoutes = require('./routes/products.routes');


const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);


/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ products: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
const dbURI = `mongodb+srv://adminRomountains:adminR123@romountains.1s40y.mongodb.net/romountainsDB?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
