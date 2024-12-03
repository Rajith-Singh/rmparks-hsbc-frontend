import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, TextField, Box, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Correct import

const DataTable = ({ transactions }) => {
    const [filters, setFilters] = useState({
        account: '',
        minAmount: '',
        maxAmount: '',
        type: '',
        date: null, // Single date filter
    });

    const [filteredTransactions, setFilteredTransactions] = useState(transactions);

    // Sort the filtered transactions by date in descending order (newest first)
    const sortTransactionsByDate = (data) => {
        // Create a shallow copy of the array before sorting
        const copiedData = [...data];
        return copiedData.sort((a, b) => new Date(b.valueDateTime) - new Date(a.valueDateTime));  // Descending order
    };

    // Handle filter changes
    const handleFilterChange = (field, value) => {
        setFilters({ ...filters, [field]: value });
    };

    // Apply Filters
    const applyFilters = () => {
        const filtered = transactions.filter((transaction) => {
            const { account, minAmount, maxAmount, type, date } = filters;
            const transactionDate = new Date(transaction.valueDateTime);

            // Check if date filter is applied
            const isDateMatch = date ? transactionDate.toDateString() === new Date(date).toDateString() : true;

            return (
                (!account || transaction.transactionInformation.includes(account)) &&
                (!minAmount || transaction.amount >= parseFloat(minAmount)) &&
                (!maxAmount || transaction.amount <= parseFloat(maxAmount)) &&
                (!type || transaction.creditDebitIndicator === type) &&
                isDateMatch // Check if the date matches
            );
        });

        // Sort the filtered transactions by date in descending order
        setFilteredTransactions(sortTransactionsByDate(filtered));
    };

    // Clear Filters
    const clearFilters = () => {
        setFilters({
            account: '',
            minAmount: '',
            maxAmount: '',
            type: '',
            date: null, // Reset date filter
        });
        // Reset to sorted transactions in descending order
        setFilteredTransactions(sortTransactionsByDate(transactions));
    };

    useEffect(() => {
        // Initially sort the transactions in descending order
        setFilteredTransactions(sortTransactionsByDate(transactions));
    }, [transactions]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'transactionReference', headerName: 'Reference', width: 200 },
        { field: 'transactionInformation', headerName: 'Account', width: 150 },
        { field: 'amount', headerName: 'Amount (LKR)', width: 150 },
        { field: 'creditDebitIndicator', headerName: 'Type', width: 120 },
        { field: 'valueDateTime', headerName: 'Date', width: 200 },
        { field: 'nextSystemWorkingDate', headerName: 'Next System Working Date', width: 200 },
    ];

    return (
        <Box>
            {/* Filter Section */}
            <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
                <Grid item xs={12} md={3}>
                    <TextField
                        label="Account"
                        variant="outlined"
                        fullWidth
                        value={filters.account}
                        onChange={(e) => handleFilterChange('account', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField
                        label="Min Amount"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={filters.minAmount}
                        onChange={(e) => handleFilterChange('minAmount', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField
                        label="Max Amount"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={filters.maxAmount}
                        onChange={(e) => handleFilterChange('maxAmount', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField
                        select
                        label="Type"
                        variant="outlined"
                        fullWidth
                        value={filters.type}
                        onChange={(e) => handleFilterChange('type', e.target.value)}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="C">Credit</MenuItem>
                        <MenuItem value="D">Debit</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={2}>
                    {/* Wrap DatePicker inside LocalizationProvider */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date"
                            value={filters.date}
                            onChange={(value) => handleFilterChange('date', value)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>

            {/* Filter and Clear Buttons */}
            <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
                <Grid item xs={12} md={2}>
                    <Button variant="contained" onClick={applyFilters}>
                        Apply Filters
                    </Button>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="outlined" onClick={clearFilters}>
                        Clear Filters
                    </Button>
                </Grid>
            </Grid>

            {/* DataGrid */}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredTransactions}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
        </Box>
    );
};

export default DataTable;
