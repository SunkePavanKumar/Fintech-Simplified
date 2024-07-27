// Base URL for the API
const apiUrl = 'http://localhost:3000/api';

// Function to fetch and display accounts
const loadAccounts = async () => {
  try {
    const response = await fetch(`${apiUrl}/accounts`);
    if (!response.ok) {
      throw new Error('Failed to fetch accounts');
    }
    const accounts = await response.json();
    populateAccountTable(accounts);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to load accounts');
  }
};

// Function to populate the account table with data
const populateAccountTable = (accounts) => {
  const tableBody = document.getElementById('accounts-table').querySelector('tbody');
  tableBody.innerHTML = ''; // Clear existing content

  accounts.forEach(account => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${account.id}</td>
      <td>${account.user_id}</td>
      <td>${account.balance}</td>
    `;
    tableBody.appendChild(row);
  });
};

// Load accounts when the DOM content is loaded
document.addEventListener('DOMContentLoaded', loadAccounts);
