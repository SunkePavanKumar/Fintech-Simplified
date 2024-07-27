const accountService = require('../services/accountService');

// Create a new account for a user
exports.createAccount = async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).send('User ID is required');
    }

    try {
        const account = await accountService.createAccount(userId);
        res.status(201).json(account);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};

// Retrieve account details by account ID
exports.getAccount = async (req, res) => {
    const { accountId } = req.params;

    if (!accountId) {
        return res.status(400).send('Account ID is required');
    }

    try {
        const account = await accountService.getAccountById(accountId);
        if (!account) {
            return res.status(404).send('Account not found');
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};



// get all accounts

exports.allAccounts = async (req, res) => {
    try {
        const account = await accountService.allAccounts();
        if (!account) {
            return res.status(404).send('No Accounts found');
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};