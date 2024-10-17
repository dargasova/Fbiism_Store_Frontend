// src/pages/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box, Divider, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../images/6c810817c014cad6ad23e5e41feee261.jpg';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PlaceIcon from '@mui/icons-material/Place';
import { Player } from "@lottiefiles/react-lottie-player";
import deliveryAnimation from "../animations/delivery.json";
import pickupAnimation from "../animations/pickup.json";

const primaryColor = '#760073';

const HomePage = () => {
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        navigate('/catalog');
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: '#f9f9f9', padding: '60px 0' }}>
            <Container maxWidth="lg">
                {/* Добро пожаловать секция */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: { xs: '40px', md: '60px' },
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
                        <Box sx={{ textAlign: 'center' }}>
                            <img
                                src={welcomeImage}
                                alt="Приветствие в магазине ФБИУКС"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ margin: '60px 0', borderBottomWidth: 2, backgroundColor: primaryColor }} />

                {/* Секция "О нас" */}
                <Grid container spacing={4} alignItems="center" id="about"> {/* Добавлен id */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img
                                src={welcomeImage}
                                alt="О нас"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontSize: { xs: '32px', md: '40px' },
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

                <Divider
                    sx={{
                        margin: '20px 0', // Уменьшил отступы сверху и снизу у полосы
                        borderBottomWidth: 2,
                        backgroundColor: primaryColor,
                    }}
                />

                {/* Секция "Доставка" */}
                <Box sx={{ padding: '10px 0' }} id="delivery"> {/* Добавлен id */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            fontSize: { xs: '24px', md: '32px' }, // Размер заголовка
                            fontWeight: 700,
                            color: primaryColor,
                            textAlign: 'center',
                            marginBottom: '20px', // Отступ снизу заголовка
                            marginTop: '10px', // Уменьшил отступ сверху
                        }}
                    >
                        Удобная и быстрая доставка
                    </Typography>

                    <Grid container spacing={2}> {/* Уменьшил расстояние между контейнерами */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '20px', // Уменьшил внутренние отступы
                                    borderRadius: '10px',
                                    backgroundColor: '#fff',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                    textAlign: 'center',
                                    height: '100%',
                                }}
                            >
                                <Player
                                    autoplay
                                    loop
                                    src={deliveryAnimation}
                                    style={{ height: '150px', width: '150px' }} // Уменьшил анимацию
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '20px', // Уменьшил размер заголовка
                                        fontWeight: 600,
                                        color: primaryColor,
                                        marginBottom: '10px',
                                    }}
                                >
                                    Как это работает?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '16px', // Уменьшил текст
                                        color: '#555',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    Выбираете и оплачиваете товар на сайте, и наш менеджер связывается с вами для подтверждения заказа.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '20px', // Уменьшил внутренние отступы
                                    borderRadius: '10px',
                                    backgroundColor: '#fff',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                    textAlign: 'center',
                                    height: '100%',
                                }}
                            >
                                <Player
                                    autoplay
                                    loop
                                    src={pickupAnimation}
                                    style={{ height: '150px', width: '150px' }} // Уменьшил анимацию
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '20px', // Уменьшил размер заголовка
                                        fontWeight: 600,
                                        color: primaryColor,
                                        marginBottom: '10px',
                                    }}
                                >
                                    Пункт самовывоза
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '16px', // Уменьшил текст
                                        color: '#555',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    Забираете товар на ФБИУКС НИЯУ МИФИ по адресу Каширское шосссе, 31.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '16px', // Уменьшил текст
                                        color: '#555',
                                        lineHeight: '1.6',
                                        marginTop: '10px',
                                    }}
                                >
                                    Или связываетесь по почте для согласования индивидуальной доставки.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;