// Base URL for the API
const apiUrl = 'http://localhost:3000/api';

// Function to fetch and display transactions based on filters
const loadTransactions = async (filterType, filterValue) => {
  try {
    if (!filterValue) {
      alert("Please provide a valid filter value.");
      return; // Exit function if no filter value is provided
    }

    // Construct URL based on the provided filter type and value
    const url = `${apiUrl}/transactions/${filterType}/${filterValue}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    const transactions = await response.json();
    populateTransactionTable(transactions);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to load transactions');
  }
};

// Function to populate the transaction table with data
const populateTransactionTable = (transactions) => {
  const tableBody = document.getElementById('transactions-table').querySelector('tbody');
  tableBody.innerHTML = ''; // Clear existing content

  transactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${transaction.id}</td>
      <td>${transaction.accountId}</td>
      <td>${transaction.amount}</td>
      <td>${transaction.type}</td>
      <td>${new Date(transaction.createdAt).toLocaleString()}</td>
    `;
    tableBody.appendChild(row);
  });
};
