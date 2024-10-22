import React from 'react';
import {Container, Typography, Box, Link, Grid} from '@mui/material';
import logo from '../images/logo_fbiism.png';
import telegramIcon from '../images/telegram.png';
import vkIcon from '../images/vk.png';

const primaryColor = '#760073';

const footerLinkStyle = {
    display: 'block',
    color: '#ffffff',
    textDecoration: 'none',
    marginBottom: '8px',
    fontFamily: 'StyreneA, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    '&:hover': {color: '#FFA500'},
    transition: 'color 0.3s ease',
};

const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offset = (window.innerHeight - section.clientHeight) / 2;
        const targetPosition = sectionPosition - offset;

        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const currentPosition = easeInOutQuad(progress, startPosition, distance, duration);

            window.scrollTo(0, currentPosition);

            if (progress < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }
};

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: primaryColor,
                color: '#ffffff',
                paddingTop: '45px',
                paddingBottom: '30px',
                marginTop: 'auto',
            }}
            id="contacts"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={3} sx={{position: 'relative', height: '200px'}}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '28px',
                                left: '-120px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="FBIISM_STORE Logo"
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    marginRight: '10px',
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 700,
                                }}
                            >
                                FBIISM STORE
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={9} sx={{position: 'relative'}}>
                        <Box
                            sx={{
                                position: 'relative',
                                marginLeft: {xs: '0px', md: '-30px'},
                            }}
                        >
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Box textAlign={{xs: 'center', md: 'left'}}>
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            sx={{
                                                fontFamily: 'StyreneA, Arial, sans-serif',
                                                fontWeight: 550,
                                                color: '#ffffff',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            Контакты
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                            sx={{
                                                fontFamily: 'StyreneA, Arial, sans-serif',
                                                fontWeight: 200,
                                                fontSize: '16px',
                                                lineHeight: '1.2',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            Адрес: Каширское ш., д. 31, Москва
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                            sx={{
                                                fontFamily: 'StyreneA, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '1.2',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            Телефон: +7 (928) 330-46-76
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                            sx={{
                                                fontFamily: 'StyreneA, Arial, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '1.2',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            Email:{' '}
                                            <Link
                                                href="mailto:info@fbiismstore.com"
                                                sx={{
                                                    color: '#FFA500',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                info@fbiismstore.com
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Box textAlign={{xs: 'center', md: 'left'}}>
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            sx={{
                                                fontFamily: 'StyreneA, Arial, sans-serif',
                                                fontWeight: 550,
                                                color: '#ffffff',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            Навигация
                                        </Typography>
                                        <Box>
                                            <Link
                                                onClick={() => scrollToSection('#home')}
                                                sx={{...footerLinkStyle, marginBottom: '20px', cursor: 'pointer'}}
                                            >
                                                Главная
                                            </Link>
                                            <Link
                                                onClick={() => scrollToSection('#about')}
                                                sx={{...footerLinkStyle, marginBottom: '20px', cursor: 'pointer'}}
                                            >
                                                О нас
                                            </Link>
                                            <Link href="/catalog" sx={{...footerLinkStyle, marginBottom: '20px'}}>
                                                Каталог
                                            </Link>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{textAlign: 'right', marginTop: '-202px', transform: 'translateX(150px)'}}>
                        <Box
                            component="a"
                            href="https://t.me/bi_mephi"
                            target="_blank"
                            sx={{display: 'inline-block', marginRight: '20px'}}
                        >
                            <Box
                                component="img"
                                src={telegramIcon}
                                alt="Telegram Icon"
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                        </Box>
                        <Box
                            component="a"
                            href="https://vk.com/fbiuks"
                            target="_blank"
                            sx={{display: 'inline-block', marginRight: '0px'}}
                        >
                            <Box
                                component="img"
                                src={vkIcon}
                                alt="VK Icon"
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
