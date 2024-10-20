// src/pages/PaymentPage.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const PaymentPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '150px',
                backgroundColor: '#ebebeb',
            }}
        >
            <Typography variant="h4" color="#760073" sx={{ fontWeight: 700 }}>
                Тут будет подключена оплата с помощью ЮКассы
            </Typography>
        </Box>
    );
};

export default PaymentPage;
