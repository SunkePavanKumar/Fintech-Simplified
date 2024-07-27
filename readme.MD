
# Fintech Platform

## Overview

The Fintech Platform is a web-based application that allows users to manage their financial transactions. It provides functionality for creating and managing users, accounts, and transactions. The platform supports filtering transactions based on user ID or account ID. It is built using Node.js, Express, and has a REST API as well as GraphQL API using Hasura.

## Setup Instructions

### 1. **Backend Setup**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/fintech-platform.git
   cd fintech-platform
   ```

2. **Install Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the `server` directory with the following content:
   ```env
    PORT = 3000
    DATABASE_URL = ""
    HASURA_GRAPHQL_ENDPOINT = ""
    HASURA_ADMIN_SECRET = 

   ```

4. **Start the Server:**
   ```bash
   npm start  // prod
   npm run dev // dev
   ```

### 2. **Frontend Setup**

1. **Serve Static Files:**
   The `client` folder contains the static files (HTML, CSS, JavaScript). You can serve these files using a static file server or include them in your backend.

2. **Open HTML Files:**
   Open the HTML files in your browser to access the application (e.g., `index.html`, `users.html`, etc.).

## API Endpoints

### REST API Endpoints

#### **User Endpoints**
- **Create User:** `POST /api/users`
- **Get User by ID:** `GET /api/users/:id`
- **Update User by ID:** `PUT /api/users/:id`
- **Delete User by ID:** `DELETE /api/users/:id`

#### **Account Endpoints**
- **Create Account:** `POST /api/accounts`
- **Get Account by ID:** `GET /api/accounts/:accountId`

#### **Transaction Endpoints**
- **Create Transaction:** `POST /api/transactions`
- **Get Transactions by User ID:** `GET /api/transactions/user/:userId`
- **Get Transactions by Account ID:** `GET /api/transactions/account/:accountId`
- **Deposit Funds:** `POST /api/deposit`
- **Withdraw Funds:** `POST /api/withdraw`

### GraphQL API Endpoints

- **GraphQL Endpoint:** `http://localhost:3000/v1/graphql`

## Frontend Pages

- **Home Page:** `index.html` - Overview of the platform.
- **Users Page:** `users.html` - List and manage users.
- **Accounts Page:** `accounts.html` - List and manage accounts.
- **Transactions Page:** `transactions.html` - View and filter transactions.
- **Create User Page:** `create-user.html` - Form to create a new user.
- **Create Account Page:** `create-account.html` - Form to create a new account.
- **Deposit/Withdraw Page:** `deposit-withdraw.html` - Form to deposit or withdraw funds.

## Notes

- Ensure your Hasura instance is correctly configured and accessible at the specified endpoint.
- The backend server and frontend files should be served correctly to interact with each other.

