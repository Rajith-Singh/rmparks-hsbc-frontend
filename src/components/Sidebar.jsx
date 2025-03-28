import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Box, Divider, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation
import HomeIcon from '@mui/icons-material/Home'; // Example icon
import EventIcon from '@mui/icons-material/Event'; // Example icon
import WarningIcon from '@mui/icons-material/Warning'; //Error icon
import InfoIcon from '@mui/icons-material/Info'; // Example icon for the '#' menu item

const Sidebar = () => {
    const menuItems = [
        { text: 'Regular Transactions', path: '/dashboard', icon: <HomeIcon /> }, // Regular transactions link
        { text: 'System Holiday Transactions', path: '/holiday-transactions', icon: <EventIcon /> }, // Holiday transactions link
        { text: 'Error Transactions', path: '/error-transactions', icon: <WarningIcon /> }, // Holiday transactions link

    ];

    const additionalMenuItems = [
        { text: 'About Us', path: '#', icon: <InfoIcon /> }, // Menu item with '#' link
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', backgroundColor: '#2c3e50', color: 'white' }, // Dark background for sidebar
            }}
        >
            <Box sx={{ padding: '20px' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ color: 'white' }}>
                    OBTP with HSBC
                </Typography>
            </Box>
            <Divider sx={{ backgroundColor: 'white', marginBottom: '20px' }} />
            
            <List>
                {/* Regular Menu Items */}
                {menuItems.map((item, index) => (
                    <ListItem button key={index} component={Link} to={item.path} sx={{ '&:hover': { backgroundColor: '#34495e' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} sx={{ color: 'white' }} />
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ backgroundColor: 'white', marginTop: '20px' }} />

            <List>
                {/* Additional Menu Items */}
                {additionalMenuItems.map((item, index) => (
                    <ListItem button key={index} component={Link} to={item.path} sx={{ '&:hover': { backgroundColor: '#34495e' } }}>
                        <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} sx={{ color: 'white' }} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
