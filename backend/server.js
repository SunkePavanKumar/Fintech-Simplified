const express = require('express');
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require('./routes/transactions');
const accountRoutes = require("./routes/accountRoutes");
const cors = require("cors");
dotenv.config();
app.use(cors())
app.use(express.json());
app.use('/api', transactionRoutes);
app.use('/api', userRoutes);
app.use('/api', accountRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
