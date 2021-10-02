const router = require('express').Router();
const { check } = require('express-validator');
const { loginUser, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Get current user
router.get('/', auth, getUser);

// Login user
router.post(
  '/',
  [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Please enter a password').not().isEmpty(),
  ],
  loginUser
);

module.exports = router;
