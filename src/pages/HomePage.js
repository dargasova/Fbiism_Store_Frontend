// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Divider, Grid, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import product1 from '../images/product1_colorcream_image4_photoroom.png';
import product2 from '../images/product2_colorblack_image1_photoroom.png';
import product3 from '../images/product3_colorblack_image1_photoroom.png';
import line from '../images/line.png';
import hearts from '../images/hearts.png';
import people1 from '../images/product1_colorcream_image4_photoroom_people.png';
import people2 from '../images/product2_colorblack_image3_photoroom_people.png';
import deliverySchema from '../images/delivery_schema.png';
import courierAnimation from '../animations/courier.json';

const primaryColor = '#760073';
const backgroundColor = '#ebebeb';

const HomePage = () => {
    const navigate = useNavigate();
    const [showScroll, setShowScroll] = useState(false);

    const handleCatalogClick = () => {
        navigate('/catalog');
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <Box sx={{ width: '100%', backgroundColor, padding: 0 }}>
            {/* Стрелка для возврата наверх */}
            <IconButton
                onClick={scrollTop}
                sx={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '18px',
                    backgroundColor: primaryColor,
                    color: '#fff',
                    zIndex: 1000,
                    opacity: showScroll ? 1 : 0,
                    visibility: showScroll ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s, visibility 0.3s',
                    '&:hover': {
                        backgroundColor: '#5a0060',
                    },
                }}
            >
                <ArrowUpwardIcon />
            </IconButton>

            {/* Основная часть страницы */}
            <Box
                id="home"
                sx={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: '700px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ marginLeft: { xs: '-20px', md: '-98px' } }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: { xs: '50px', md: '70px' },
                                        fontWeight: 700,
                                        color: primaryColor,
                                        marginBottom: '20px',
                                    }}
                                >
                                    Мерч ФБИУКС
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={handleCatalogClick}
                                    sx={{
                                        borderColor: primaryColor,
                                        color: primaryColor,
                                        borderWidth: '1.5px',
                                        borderRadius: '30px',
                                        '&:hover': {
                                            borderColor: '#5a0060',
                                            color: '#5a0060',
                                        },
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '20px',
                                        fontWeight: 600,
                                        padding: '12px 35px',
                                    }}
                                >
                                    Каталог
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* Изображения */}
                            <Box sx={{ position: 'relative', height: '100%' }}>
                                <img
                                    src={product1}
                                    alt="Product 1"
                                    style={{
                                        width: '420px',
                                        height: '420px',
                                        objectFit: 'cover',
                                        transform: 'rotate(6deg)',
                                        position: 'absolute',
                                        top: '-180px',
                                        left: '450px',
                                        zIndex: 2,
                                    }}
                                />
                                <img
                                    src={product2}
                                    alt="Product 2"
                                    style={{
                                        width: '340px',
                                        height: '340px',
                                        objectFit: 'cover',
                                        transform: 'rotate(-10deg)',
                                        position: 'absolute',
                                        top: '-230px',
                                        left: '20px',
                                        zIndex: 1,
                                    }}
                                />
                                <img
                                    src={product3}
                                    alt="Product 3"
                                    style={{
                                        width: '140px',
                                        height: '140px',
                                        objectFit: 'cover',
                                        transform: 'rotate(-2deg)',
                                        position: 'absolute',
                                        top: '-5px',
                                        left: '195px',
                                        zIndex: 3,
                                    }}
                                />
                                <img
                                    src={line}
                                    alt="Line decoration"
                                    style={{
                                        width: '1700px',
                                        height: 'auto',
                                        transform: 'rotate(-2deg)',
                                        position: 'absolute',
                                        top: '-190px',
                                        left: '-400px',
                                        zIndex: 0,
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider
                sx={{
                    backgroundColor: primaryColor,
                    margin: '30px 0',
                    borderBottomWidth: 0,
                }}
            />
            {/* Остальная часть страницы */}
            <Box
                sx={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: '700px',
                    overflow: 'hidden',
                    scrollMarginTop: '100px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Grid container spacing={4} alignItems="center" id="about" sx={{ scrollMarginTop: '100px' }}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                paddingLeft: { xs: '25px', md: '150px' },
                                paddingRight: { xs: '25px', md: '50px' },
                                maxWidth: '580px',
                                margin: '0 auto',
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: { xs: '38px', md: '46px' },
                                    fontWeight: 700,
                                    color: primaryColor,
                                    marginBottom: '50px',
                                }}
                            >
                                О нас
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '20px',
                                    color: '#000000',
                                    lineHeight: '1.6',
                                }}
                            >
                                Мы — команда людей, объединенных любовью к аналитике, знаниям и стилю. Наша миссия —
                                предоставить студентам и выпускникам ФБИУКС уникальную возможность выразить свою
                                приверженность факультету через стиль и комфорт.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '20px',
                                    color: '#000000',
                                    lineHeight: '1.6',
                                }}
                            >
                                Каждая наша деталь продумана до мельчайших нюансов. Мы стремимся к совершенству в каждом
                                пошиве, ценя ваши высокие стандарты.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '20px',
                                    color: '#000000',
                                    lineHeight: '1.6',
                                }}
                            >
                                Присоединяйтесь к нам, чтобы делиться своей страстью к аналитике и вместе с нами
                                воплощать идеи в реальность.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                position: 'relative',
                                height: '100%',
                            }}
                        >
                            <img
                                src={hearts}
                                alt="О нас"
                                style={{
                                    width: '335px',
                                    height: 'auto',
                                    transform: 'scaleX(-1)',
                                    position: 'relative',
                                    top: '-160px',
                                    left: '490px',
                                    marginRight: '15px',
                                    animation: 'heartbeat 1.5s ease-in-out infinite', // Исправлена CSS-анимация
                                }}
                            />
                            <img
                                src={people1}
                                alt="Product 1"
                                style={{
                                    width: '370px',
                                    height: 'auto',
                                    position: 'relative',
                                    top: '120px',
                                    left: '300px',
                                    marginRight: '20px',
                                }}
                            />
                            <img
                                src={people2}
                                alt="Product 2"
                                style={{
                                    width: '470px',
                                    height: 'auto',
                                    top: '120px',
                                    left: '-450px',
                                    position: 'relative',
                                    bottom: '0',
                                }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Divider
                sx={{
                    backgroundColor: primaryColor,
                    margin: '30px 0',
                    borderBottomWidth: 0,
                }}
            />

            <Box
                sx={{
                    backgroundColor: '#fff',
                    paddingTop: '70px',
                    marginBottom: '-20px',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 0,
                    scrollMarginTop: '100px',
                }}
                id="delivery"
            >
                <img
                    src={line}
                    alt="Line decoration"
                    style={{
                        width: '1600px',
                        height: 'auto',
                        transform: 'rotate(70deg)',
                        position: 'absolute',
                        top: '100px',
                        left: '650px',
                        zIndex: 1,
                    }}
                />

                <Box sx={{ paddingLeft: '175px', paddingRight: { xs: '20px', md: '175px' } }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            fontSize: { xs: '36px', md: '44px' },
                            fontWeight: 700,
                            color: primaryColor,
                            textAlign: 'left',
                            marginBottom: '20px',
                        }}
                    >
                        Доставка
                    </Typography>

                    <Box sx={{ position: 'relative', maxWidth: '1000px', textAlign: 'left' }}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                marginBottom: '20px',
                                fontSize: '20px',
                                color: '#000000',
                                lineHeight: '1.8',
                            }}
                        >
                            Мы предлагаем удобную и быструю доставку для наших клиентов:
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '15px',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '25px',
                                        height: '25px',
                                        backgroundColor: primaryColor,
                                        borderRadius: '50%',
                                        color: '#fff',
                                        fontSize: '16px',
                                        marginRight: '10px',
                                    }}
                                >
                                    1
                                </span>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '19px',
                                        color: '#000000',
                                        lineHeight: '1.7',
                                    }}
                                >
                                    Выберите и оплатите товар на сайте
                                </Typography>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <span
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '25px',
                                        height: '25px',
                                        backgroundColor: primaryColor,
                                        borderRadius: '50%',
                                        color: '#fff',
                                        fontSize: '16px',
                                        marginRight: '10px',
                                    }}
                                >
                                    2
                                </span>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '19px',
                                        color: '#000000',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    Заберите товар в НИЯУ МИФИ или свяжитесь с нами по почте для согласования доставки
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                </Box>

                <Box sx={{ position: 'relative', width: '100%', marginTop: '70px', paddingLeft: '175px' }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-5px',
                            right: '840px',
                            width: '150px',
                            height: '150px',
                            pointerEvents: 'none',
                            zIndex: 2,
                        }}
                    >
                        <Player autoplay loop src={courierAnimation} style={{ height: '100%', width: '100%' }} />
                    </Box>

                    <img
                        src={deliverySchema}
                        alt="Delivery Schema"
                        style={{
                            width: '60%',
                            display: 'block',
                            marginLeft: 0,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
