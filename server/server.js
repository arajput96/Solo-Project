const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/soloproject' : 'mongodb://localhost/soloproject';
mongoose.connect(mongoURI);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);