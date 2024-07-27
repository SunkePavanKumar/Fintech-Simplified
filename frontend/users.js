// Base URL for the API
const apiUrl = 'http://localhost:3000/api';

// Function to fetch and display users
const loadUsers = async () => {
  try {
    const response = await fetch(`${apiUrl}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    populateUserTable(users);
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to load users');
  }
};

// Function to populate the user table with data
const populateUserTable = (users) => {
  const tableBody = document.getElementById('users-table').querySelector('tbody');
  tableBody.innerHTML = ''; // Clear existing content

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
    `;
    tableBody.appendChild(row);
  });
};

// Load users when the DOM content is loaded
document.addEventListener('DOMContentLoaded', loadUsers);
