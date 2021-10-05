const router = require('express').Router();
const { check } = require('express-validator');
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
      check('date', 'Date is rqeuired').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('amount', 'Amount is required').not().isEmpty(),
    ],
  ],
  createTransaction
);

router.get('/', auth, getAllTransactions);

router.put('/:id', auth, updateTransaction);

router.delete('/:id', auth, deleteTransaction);

module.exports = router;
