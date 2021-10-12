const router = require('express').Router();
const { body } = require('express-validator');
const { loginUser, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Get current user
router.get('/', auth, getUser);

// Login user
router.post(
  '/',
  [
    body('email', 'Please include a valid email address').isEmail(),
    body('password', 'Please enter a password').not().isEmpty(),
  ],
  loginUser
);

module.exports = router;
