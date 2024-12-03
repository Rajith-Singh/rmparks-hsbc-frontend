import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#f1f1f1',
                padding: '10px 20px',
                position: 'fixed',
                bottom: 0,
                left: 0,
                textAlign: 'center',
                boxShadow: '0px -2px 5px rgba(0,0,0,0.1)',
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Arrogance Technologies Pvt. Ltd. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
