const pool = require("../config/db");

// Create a new transaction record
exports.createTransaction = async (userId, accountId, amount, transactionType) => {
    const result = await pool.query(
        'INSERT INTO transactions (account_id, amount, type) VALUES ($1, $2, $3) RETURNING *',
        [accountId, amount, transactionType]
    );
    return result.rows[0];
};

// Retrieve all transactions for an account
exports.getTransactionsByAccountId = async (accountId) => {
    const result = await pool.query(
        'SELECT * FROM transactions WHERE account_id = $1 ORDER BY created_at DESC',
        [accountId]
    );
    return result.rows;
};

// Retrieve all transactions for a user
exports.getTransactionsByUserId = async (userId) => {
    const result = await pool.query(
        'SELECT * FROM transactions WHERE user_id = $1 ORDER BY created_at DESC',
        [userId]
    );
    return result.rows;
};
