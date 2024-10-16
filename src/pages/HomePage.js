import React from 'react';
import {Container, Typography, Button, Box, Divider, Grid} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import welcomeImage from '../images/6c810817c014cad6ad23e5e41feee261.jpg';

const primaryColor = '#760073';

const HomePage = () => {
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        navigate('/catalog');
    };

    return (
        <Box sx={{width: '100%', backgroundColor: '#f9f9f9', padding: '60px 0'}}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: {xs: '40px', md: '60px'},
                                fontWeight: 700,
                                color: primaryColor,
                                marginBottom: '20px',
                            }}
                        >
                            Добро пожаловать в магазин мерча ФБИУКС!
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: '20px',
                                color: '#555',
                                marginBottom: '30px',
                            }}
                        >
                            Откройте для себя уникальные товары, отражающие вашу страсть к науке и стилю.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleCatalogClick}
                            sx={{
                                backgroundColor: primaryColor,
                                '&:hover': {
                                    backgroundColor: '#5a0060',
                                },
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: '18px',
                                fontWeight: 600,
                                padding: '10px 30px',
                            }}
                        >
                            Каталог
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{textAlign: 'center'}}>
                            <img
                                src={welcomeImage}
                                alt="Приветствие в магазине ФБИУКС"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{margin: '60px 0', borderBottomWidth: 2, backgroundColor: primaryColor}}/>

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{textAlign: 'center'}}>
                            <img
                                src={welcomeImage}
                                alt="О нас"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: {xs: '32px', md: '40px'},
                                fontWeight: 700,
                                color: primaryColor,
                                marginBottom: '20px',
                            }}
                        >
                            О нас
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: '18px',
                                color: '#555',
                                lineHeight: '1.8',
                            }}
                        >
                            Мы — команда единомышленников, объединенных стремлением к знаниям и стилю. Наша миссия —
                            помочь студентам выразить свою любовь к науке через уникальный дизайн и удобство.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: '18px',
                                color: '#555',
                                lineHeight: '1.8',
                            }}
                        >
                            Каждая деталь нашей продукции тщательно продумана и воплощает стремление к совершенству.
                            Присоединяйтесь к нам, чтобы разделить увлечение наукой и стилем!
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default HomePage;
