import axios from 'axios';

const API_BASE_URL = 'http://localhost:3020'; // Backend server URL

// Fetch transactions from the backend (original transactions)
export const fetchTransactions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions`);
        return response.data.transactions || [];
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
    }
};

// Fetch holiday transactions from the backend (new endpoint)
export const fetchHolidayTransactions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/holiday-transactions`);
        return response.data.transactions || [];
    } catch (error) {
        console.error('Error fetching holiday transactions:', error);
        return [];
    }
};

// Fetch error transactions from the backend (new endpoint)
export const fetchErrorTransactions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/error-transactions`);
        return response.data.transactions || [];
    } catch (error) {
        console.error('Error fetching error transactions:', error);
        return [];
    }
};


// You can add more utility functions in the future, e.g., posting new transactions, etc.
