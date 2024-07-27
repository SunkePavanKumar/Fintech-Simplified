const pool = require("../config/db");

// Create a new account for a user
exports.createAccount = async (userId) => {
    const result = await pool.query(
        'INSERT INTO accounts (user_id, balance) VALUES ($1, 0.00) RETURNING *',
        [userId]
    );
    return result.rows[0];
};

// Get account details by ID
exports.getAccountById = async (accountId) => {
    const result = await pool.query(
        'SELECT * FROM accounts WHERE id = $1',
        [accountId]
    );
    return result.rows[0];
};

//get all the accounts

exports.allAccounts = async () => {
    const result = await pool.query(
        'SELECT * FROM accounts'
    );
    return result.rows;
};

// Update account balance
exports.updateAccountBalance = async (accountId, amount) => {
    const result = await pool.query(
        'UPDATE accounts SET balance = balance + $1 WHERE id = $2 RETURNING *',
        [amount, accountId]
    );
    return result.rows[0];
};
