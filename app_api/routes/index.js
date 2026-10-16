const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt'); // Updated import syntax for newer versions

// Method to authenticate our JWT
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// GET Method routes tripsList
// POST Method routes tripsAddTrip - Requires authentication
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(auth, tripsController.tripsAddTrip);

// Authentication routes
router.route('/register').post(authController.register);
router.route('/login').post(authController.login);

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - Requires authentication
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;