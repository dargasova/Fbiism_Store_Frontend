// src/pages/ContactPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Контакты
            </Typography>
            <Typography variant="body1" gutterBottom>
                Адрес: ул. Примерная, д. 1, Москва, Россия
            </Typography>
            <Typography variant="body1" gutterBottom>
                Телефон: +7 (123) 456-78-90
            </Typography>
            <Typography variant="body1" gutterBottom>
                Email: info@fbiismstore.com
            </Typography>
        </Container>
    );
};

export default ContactPage;
