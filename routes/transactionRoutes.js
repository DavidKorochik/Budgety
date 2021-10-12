const router = require('express').Router();
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

router.post(
  '/',
  [
    auth,
    [
      body('date', 'Date is rqeuired').not().isEmpty(),
      body('description', 'Description is required').not().isEmpty(),
      body('amount', 'Amount is required').not().isEmpty(),
    ],
  ],
  createTransaction
);

router.get('/', auth, getAllTransactions);

router.patch('/:id', auth, updateTransaction);

router.delete('/:id', auth, deleteTransaction);

module.exports = router;
