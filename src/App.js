import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Dashboard from './pages/Dashboard';
import HolidayTransactionsPage from './pages/HolidayTransactionsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} /> 

        {/* Regular Transaction page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Holiday Transactions page */}
        <Route path="/holiday-transactions" element={<HolidayTransactionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
