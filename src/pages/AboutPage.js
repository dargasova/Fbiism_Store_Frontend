// src/pages/AboutPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                О нас
            </Typography>
            <Typography>
                Здесь вы можете добавить информацию о вашем магазине и команде.
            </Typography>
        </Container>
    );
};

export default AboutPage;
