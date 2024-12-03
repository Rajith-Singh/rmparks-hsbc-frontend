import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const KPI = ({ title, value, percentage, color }) => (
    <Card
        sx={{
            minWidth: 250,
            margin: '10px',
            padding: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            borderLeft: `5px solid ${color}`,
        }}
    >
        <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
                {title}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
                {value}
            </Typography>
            <Typography variant="body2" color={color}>
                {percentage}
            </Typography>
        </CardContent>
    </Card>
);

export default KPI;
