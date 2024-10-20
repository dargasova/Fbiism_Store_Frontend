import React from 'react';
import {Container, Typography, Box, Link, Grid} from '@mui/material';
import logo from '../images/logo_fbiism.png'; // Импортируем логотип
import telegramIcon from '../images/telegram.png'; // Импортируем иконку Telegram
import vkIcon from '../images/vk.png'; // Импортируем иконку ВКонтакте

const primaryColor = '#760073';

const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offset = (window.innerHeight - section.clientHeight) / 2;
        const targetPosition = sectionPosition - offset;

        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Увеличили длительность до 1000 мс для более плавного скроллинга
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

// Функция для ещё более плавной анимации (ease-in-out, но мягче)
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: primaryColor,
                color: '#ffffff',
                paddingTop: '45px', // Отступ сверху
                paddingBottom: '30px', // Отступ снизу
                marginTop: 'auto',
            }}
            id="contacts"
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="flex-start">
                    {/* Логотип и название магазина */}
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

                    {/* Контейнер для "Контакты" и "Быстрые ссылки" с точным позиционированием */}
                    <Grid item xs={12} md={9} sx={{position: 'relative'}}>
                        <Box
                            sx={{
                                position: 'relative',
                                marginLeft: {xs: '0px', md: '-30px'},
                            }}
                        >
                            <Grid container spacing={4}>
                                {/* Контактная информация */}
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
                                                lineHeight: '1.2', // Межстрочный интервал
                                                marginBottom: '20px', // Отступ между элементами
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
                                                lineHeight: '1.2', // Межстрочный интервал
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
                                            Email: <Link href="mailto:info@fbiismstore.com" sx={{
                                            color: '#FFA500',
                                            textDecoration: 'none'
                                        }}>info@fbiismstore.com</Link>
                                        </Typography>
                                    </Box>
                                </Grid>

                                {/* Быстрые ссылки */}
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
                                                onClick={() => scrollToSection("#home")}
                                                sx={{ ...footerLinkStyle, marginBottom: '20px', cursor: 'pointer' }}
                                            >
                                                Главная
                                            </Link>

                                            <Link
                                                onClick={() => scrollToSection("#about")}
                                                sx={{ ...footerLinkStyle, marginBottom: '20px', cursor: 'pointer' }}
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


                    {/* Иконки соцсетей */}
                    <Grid item xs={12} sx={{textAlign: 'right', marginTop: '-202px', transform: 'translateX(150px)'}}>
                        <Box
                            component="a"
                            href="https://t.me/bi_mephi"
                            target="_blank"
                            sx={{display: 'inline-block', marginRight: '20px'}} // Отступ между иконками
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
                            sx={{display: 'inline-block', marginRight: '0px'}} // Отступ между иконками
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

// Стили для быстрых ссылок
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

// Экспортируем компонент
export default Footer;
