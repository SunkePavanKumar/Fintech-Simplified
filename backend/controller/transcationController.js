const accountService = require('../services/accountService');
const transactionService = require("../services/transactionService");
const hasuraService = require('../services/hasuraService');

// Create a new transaction record
exports.createTransaction = async (req, res) => {
    const { userId, accountId, amount, transactionType } = req.body;

    if (!userId || !accountId || !amount || !transactionType) {
        return res.status(400).send('User ID, Account ID, amount, and transaction type are required');
    }

    try {
        const transaction = await transactionService.createTransaction(userId, accountId, amount, transactionType);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};

// Retrieve all transactions for a user
exports.getTransactionsByUserId = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).send('User ID is required');
    }

    try {
        const transactions = await transactionService.getTransactionsByUserId(userId);
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};

// Retrieve all transactions for an account
exports.getTransactionsByAccountId = async (req, res) => {
    const { accountId } = req.params;

    if (!accountId) {
        return res.status(400).send('Account ID is required');
    }

    try {
        const transactions = await transactionService.getTransactionsByAccountId(accountId);
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};

// Deposit money into an account
exports.deposit = async (req, res) => {
    const { accountId, amount } = req.body;

    if (!accountId || !amount) {
        return res.status(400).send('Account ID and amount are required');
    }

    try {
        // Update the account balance
        const account = await accountService.updateAccountBalance(accountId, amount);

        // Record the transaction
        await transactionService.createTransaction(accountId, amount, 'deposit');
        
        res.status(200).send('Deposit successful');
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};

// Withdraw money from an account
exports.withdraw = async (req, res) => {
    const { accountId, amount } = req.body;

    if (!accountId || !amount) {
        return res.status(400).send('Account ID and amount are required');
    }

    try {
        // Check account balance
        const account = await accountService.getAccountById(accountId);

        if (account.balance < amount) {
            return res.status(400).send('Insufficient funds');
        }

        // Update the account balance
        await accountService.updateAccountBalance(accountId, -amount);

        // Record the transaction
        await transactionService.createTransaction(null, accountId, amount, 'withdrawal');
        
        res.status(200).send('Withdrawal successful');
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};
