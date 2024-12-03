import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="fixed" color="primary" sx={{ width: `calc(100% - 240px)`, ml: '240px' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Welcome Back!
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ marginRight: 2 }}>
                        RM Parks Pvt Ltd
                    </Typography>
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
