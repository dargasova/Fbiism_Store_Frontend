// src/pages/ContactPage.js
import React from 'react';
import {Container, Typography, Box, Button} from '@mui/material';

const ContactPage = () => {
    return (
        <Container>
            <Box sx={{marginTop: '40px'}}>
                <Typography
                    variant="h4"
                    gutterBottom
                    style={{
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        fontWeight: 700,
                        color: '#000000'
                    }}
                >
                    Контакты
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    style={{
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        marginBottom: '20px'
                    }}
                >
                    Адрес: ул. Примерная, д. 1, Москва, Россия
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    style={{
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        marginBottom: '20px'
                    }}
                >
                    Телефон: +7 (123) 456-78-90
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    style={{
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        marginBottom: '20px'
                    }}
                >
                    Email: <a href="mailto:info@fbiismstore.com"
                              style={{color: '#760073', textDecoration: 'none'}}>info@fbiismstore.com</a>
                </Typography>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: '#760073',
                        color: 'white',
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        marginTop: '20px'
                    }}
                    href="mailto:info@fbiismstore.com"
                >
                    Связаться с нами
                </Button>
            </Box>
        </Container>
    );
};

export default ContactPage;
