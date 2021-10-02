const router = require('express').Router();
const { registerUser } = require('../controllers/userController');
const { check } = require('express-validator');

// Register user
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('password2', 'Please re-enter the password').not().isEmpty(),
  ],
  registerUser
);

module.exports = router;
