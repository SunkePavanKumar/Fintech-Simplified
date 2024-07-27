const express = require('express');
const router = express.Router();
const transactionController = require("../controller/transcationController");

// Route to create a new transaction record
router.post('/transactions', transactionController.createTransaction);

// Route to get all transactions for a user
router.get('/transactions/user/:userId', transactionController.getTransactionsByUserId);

// Route to get all transactions for an account
router.get('/transactions/account/:accountId', transactionController.getTransactionsByAccountId);

// Route to deposit funds
router.post('/deposit', transactionController.deposit);

// Route to withdraw funds
router.post('/withdraw', transactionController.withdraw);

module.exports = router;
