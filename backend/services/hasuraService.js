const axios = require('axios');
require('dotenv').config();

const HASURA_GRAPHQL_ENDPOINT = process.env.HASURA_GRAPHQL_ENDPOINT;

const axiosInstance = axios.create({
  baseURL: HASURA_GRAPHQL_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

const executeQuery = async (query, variables = {}) => {
  try {
    const response = await axiosInstance.post('', {
      query,
      variables,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error executing query: ${error.message}`);
  }
};

module.exports = {
  executeQuery,
};
