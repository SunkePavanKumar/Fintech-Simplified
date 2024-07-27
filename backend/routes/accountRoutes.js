const express = require('express');
const router = express.Router();
const accountController = require("../controller/accountController");

// Route to create a new account
router.post('/accounts', accountController.createAccount);

// Route to get account details by account ID
router.get('/accounts/:accountId', accountController.getAccount);

// get the accounts with id

router.get("/accounts", accountController.allAccounts);

module.exports = router;
