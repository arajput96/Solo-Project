const User = require('../models/userModel');

const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  console.log('CreateUser req: ', req);
  try {
    const doc = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    console.log(`Username: ${doc.username} \nPassword: ${doc.password}`);
    return next();
  } catch (err) {
      console.log(`Error creating new user: ${err}`);
      return next(err);
  }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async (req, res, next) => {
  // write code here
  try {
    // await the results of the find
    // console.log('Line right before await user.findone');
    const results = await User.findOne({'username' : req.body.username});
    // console.log('Line right after user.findone');
    // console.log(results._doc.username);
    // console.log(results);
    // compare the results of the find to the POSTed data
    // redirect to either /secret or /signup depending on result
    if (results._doc.username && results._doc.password === req.body.password){
      // console.log('You are the chosen one');
      res.locals.id = results._doc._id.id;
      // console.log('This is res.locals in verifyUser: ', res.locals);
      return next();
    } else {
      // console.log('You are really not the chosen one');
      // return res.redirect('/signup');
    }
  } catch (err) {
    // Error something
    console.log('You are so not chosen you caused an error.')
    // res.redirect('/signup');
    return;
  }
};

module.exports = userController;
