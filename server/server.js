const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/soloproject' : 'mongodb://localhost/soloproject';
mongoose.connect('mongodb+srv://admin:R01901462%24@solo-project.htjol.mongodb.net/Solo-Project?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/assets', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../assets/gfuel2.jpeg'));
});


app.post('/signup', userController.createUser, (req, res) => {
  // what should happen here on successful sign up?
  return res.status(200);
});

app.post('/login', userController.createUser, (req, res) => {
  // what should happen here on successful sign up?
});

app.listen(3000);