const Transaction = require('../models/Transaction');
const { validationResult } = require('express-validator');
require('dotenv').config();

// Create a transaction
const createTransaction = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const { date, description, amount } = req.body;

  try {
    const transaction = new Transaction({
      date,
      description,
      amount,
      user: req.user.id,
    });

    await transaction.save();

    res.json(transaction);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({
      date: -1,
    });

    // We don't need to add a condition where we send a message to the UI if there are no transactions because we are handling it in the front

    res.json(transactions);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Update a transaction
const updateTransaction = async (req, res) => {
  const { date, description, amount } = req.body;
  const id = req.params.id;
  const obj = {};

  if (date) obj.date = date;
  if (description) obj.description = description;
  if (amount) obj.amount = amount;

  try {
    let transactionToUpdate = await Transaction.findById(id);

    if (!transactionToUpdate) {
      return res.status(404).json({ error: 'No transaction was found' });
    }

    if (transactionToUpdate.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    transactionToUpdate = await Transaction.findByIdAndUpdate(
      id,
      {
        $set: obj,
      },
      { new: true }
    );

    res.json(transactionToUpdate);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    let transactionToDelete = await Transaction.findById(id);

    if (!transactionToDelete) {
      return res.status(404).json({ error: 'No transaction was found' });
    }

    if (transactionToDelete.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    transactionToDelete = await Transaction.findByIdAndDelete(id);

    res.json({});
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
};
