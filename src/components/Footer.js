// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f1f1f1',
                padding: '60px 0', // Увеличил расстояние до 60px
                marginTop: 'auto'
            }}
            id="contacts" // Добавлен id
        >
            <Container>
                <Typography
                    variant="h6"
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
                    Адрес: Каширское ш., д. 31, Москва, Россия
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
                    Телефон: +7 (928) 330-46-76
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
                    Email: <Link href="mailto:info@fbiismstore.com" style={{ color: '#760073', textDecoration: 'none' }}>info@fbiismstore.com</Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
