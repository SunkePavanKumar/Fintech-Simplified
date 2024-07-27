const pool = require('../config/db');

// Create a new user
exports.    createUser = async (username, email, password) => {
  const result = await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password]
  );
  return result.rows[0];
};

// Get user by ID
exports.getUserById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

// get all the users
exports.getUsers = async () => {
  const result = await pool.query(
    'SELECT * FROM users'
  );
  return result.rows;
};


// Update user by ID
exports.updateUser = async (id, username, email, password) => {
  const result = await pool.query(
    'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
    [username, email, password, id]
  );
  return result.rows[0];
};

// Delete user by ID
exports.deleteUser = async (id) => {
  const result = await pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING id',
    [id]
  );
  return result.rows[0];
};
