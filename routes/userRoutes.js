const router = require('express').Router();
const { registerUser } = require('../controllers/userController');
const { body } = require('express-validator');

// Register user
router.post(
  '/',
  [
    body(
      'password',
      'Please include a password with a minimum of 6 characters'
    ).isLength({ min: 6 }),
    body('email', 'Please include a valid email address').isEmail(),
  ],
  registerUser
);

module.exports = router;
