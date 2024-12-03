import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KPI from '../components/KPI';
import BarLineChart from '../components/BarLineChart';
import DonutChart from '../components/DonutChart';
import DataTable from '../components/DataTable';
import { fetchHolidayTransactions } from '../services/api';

const HolidayTransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHolidayTransactions();
            setTransactions(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    // Generate chart data
    const barLineData = {
        labels: transactions.map((t) => t.valueDateTime.split('T')[0]), // Date only, no time
        barData: transactions.map((t) => t.amount),
        lineData: transactions.map((t) => t.amount * 0.75), // Simulated trend for line
    };

    const donutData = {
        credit: transactions.filter((t) => t.creditDebitIndicator === 'C').length,
        debit: transactions.filter((t) => t.creditDebitIndicator === 'D').length,
    };

    const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1 }}>
                <Header />
                <Box sx={{ padding: '30px', marginTop: '70px', marginBottom: '60px' }}>
                    {/* Display Title - Holiday Transactions */}
                    <Box sx={{ marginBottom: '30px' }}>
                        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#FF5722' }}>
                            Holiday Transactions
                        </Typography>
                    </Box>

                    {/* KPI Section */}
                    <Grid container spacing={3}>
                        <KPI title="Total Holiday Transactions" value={transactions.length} color="#FF5722" />
                        <KPI title="Total Amount" value={`LKR ${totalAmount}`} color="#FF9800" />
                        <KPI title="Credit Transactions" value={donutData.credit} color="#2196F3" />
                    </Grid>

                    {/* Charts Section */}
                    <Grid container spacing={3} sx={{ marginTop: '20px' }}>
                        <Grid item xs={12} md={8}>
                            <BarLineChart data={barLineData} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DonutChart data={donutData} />
                        </Grid>
                    </Grid>

                    {/* Table Section with Filtering */}
                    <Box sx={{ marginTop: '30px' }}>
                        <DataTable transactions={transactions} /> {/* DataTable component */}
                    </Box>
                </Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default HolidayTransactionsPage;
