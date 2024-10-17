import React from 'react';
import { Container, Typography, Button, Box, Divider, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import product1 from '../images/product1_colorcream_image4_photoroom.png';
import product2 from '../images/product2_colorblack_image1_photoroom.png';
import product3 from '../images/product3_colorblack_image1_photoroom.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PlaceIcon from '@mui/icons-material/Place';
import { Player } from "@lottiefiles/react-lottie-player";
import deliveryAnimation from "../animations/delivery.json";
import pickupAnimation from "../animations/pickup.json";

const primaryColor = '#760073';
const backgroundColor = '#ebebeb'; // Теплый серый фон

const HomePage = () => {
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        navigate('/catalog');
    };

    return (
        <Box sx={{ width: '100%', backgroundColor: backgroundColor, padding: '50px 0' }}> {/* Теплый серый фон и небольшой отступ */}
            <Box sx={{ backgroundColor: '#fff', width: '100%', height: '600px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}> {/* Контейнер с выравниванием по центру */}
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ marginLeft: { xs: '-20px', md: '-100px' } }}> {/* Сдвиг текста и кнопки левее */}
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
                                    Мерч ФБИУКС
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={handleCatalogClick}
                                    sx={{
                                        borderColor: primaryColor,
                                        color: primaryColor,
                                        '&:hover': {
                                            borderColor: '#5a0060',
                                            color: '#5a0060',
                                        },
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        padding: '10px 30px',
                                    }}
                                >
                                    Каталог
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative', height: '100%' }}> {/* Относительное позиционирование для контейнера изображений */}
                                <img
                                    src={product1}
                                    alt="Product 1"
                                    style={{
                                        width: '380px',
                                        height: '380px',
                                        objectFit: 'cover',
                                        transform: 'rotate(6deg)',
                                        position: 'absolute',
                                        top: '-200px', // худи
                                        left: '390px',
                                        zIndex: 2,
                                    }}
                                />
                                <img
                                    src={product2}
                                    alt="Product 2"
                                    style={{
                                        width: '320px',
                                        height: '320px',
                                        objectFit: 'cover',
                                        transform: 'rotate(-10deg)',
                                        position: 'absolute',
                                        top: '-200px', // футболка
                                        left: '0px',
                                        zIndex: 1,
                                    }}
                                />
                                <img
                                    src={product3}
                                    alt="Product 3"
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'cover',
                                        transform: 'rotate(-2deg)',
                                        position: 'absolute',
                                        top: '-10px', // кружка
                                        left: '155px',
                                        zIndex: 3,
                                    }}
                                />

                                {/* Добавляем изображение line.png */}
                                <img
                                    src={require('C:/Users/User/fbiism_store/src/images/line.png')}
                                    alt="Line decoration"
                                    style={{
                                        width: '1500px',
                                        height: 'auto',
                                        transform: 'rotate(-2deg)',
                                        position: 'absolute',
                                        top: '-200px',
                                        left: '-350px',
                                        zIndex: 0, // Самый нижний слой
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>





            <Divider sx={{ margin: '60px 0', borderBottomWidth: 2, backgroundColor: primaryColor }} />
            {/* Секция "О нас" */}
            <Box sx={{ backgroundColor: '#fff', width: '100%', height: '600px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}> {/* Контейнер с выравниванием по центру */}
                <Grid container spacing={4} alignItems="center" id="about">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ paddingLeft: { xs: '20px', md: '175px' }, paddingRight: { xs: '20px', md: '50px' } }}>

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
                                    color: '#000000',
                                    lineHeight: '1.8',
                                }}
                            >
                                Мы — команда людей, объединенных любовью к аналитике, знаниям и стилю. Наша миссия — предоставить студентам и выпускникам ФБИУКС уникальную возможность выразить свою приверженность факультету через стиль и комфорт.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '18px',
                                    color: '#000000',
                                    lineHeight: '1.8',
                                }}
                            >
                                Каждая наша деталь продумана до мельчайших нюансов. Мы стремимся к совершенству в каждом пошиве, ценя ваши высокие стандарты.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '18px',
                                    color: '#000000',
                                    lineHeight: '1.8',
                                }}
                            >
                                Присоединяйтесь к нам, чтобы делиться своей страстью к аналитике и вместе с нами воплощать идеи в реальность.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', height: '100%' }}> {/* Ряд изображений */}
                            <img
                                src={require('C:/Users/User/fbiism_store/src/images/hearts.png')}
                                alt="О нас"
                                style={{
                                    width: '300px',
                                    height: 'auto',
                                    transform: 'scaleX(-1)', // Отзеркаливание изображения
                                    position: 'relative',
                                    top: '-150px', // Регулировка по вертикали
                                    left: '460px', // Регулировка по горизонтали
                                    marginRight: '20px', // Отступ между изображениями
                                }}
                            />
                            <img
                                src={require('C:/Users/User/fbiism_store/src/images/product1_colorcream_image4_photoroom_people.png')}
                                alt="Product 1"
                                style={{
                                    width: '350px',
                                    height: 'auto',
                                    position: 'relative',
                                    top: '100px', // Регулировка по вертикали
                                    left: '300px', // Регулировка по горизонтали
                                    marginRight: '20px', // Отступ между изображениями
                                }}
                            />
                            <img
                                src={require('C:/Users/User/fbiism_store/src/images/product2_colorblack_image3_photoroom_people.png')}
                                alt="Product 2"
                                style={{
                                    width: '450px',
                                    height: 'auto',
                                    top: '100px', // Регулировка по вертикали
                                    left: '-450px', // Регулировка по горизонтали
                                    position: 'relative',
                                    bottom: '0', // Прижимаем изображение к нижнему краю контейнера
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>




            <Divider sx={{margin: '60px 0', borderBottomWidth: 2, backgroundColor: primaryColor}}/>

            {/* Секция "Удобная и быстрая доставка" */}
            <Box sx={{backgroundColor: '#fff', padding: '50px 0'}} id="delivery"> {/* Белый контейнер с отступами */}
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        fontSize: { xs: '24px', md: '32px' },
                        fontWeight: 700,
                        color: primaryColor,
                        textAlign: 'center',
                        marginBottom: '20px',
                    }}
                >
                    Удобная и быстрая доставка
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: '20px',
                                borderRadius: '10px',
                                backgroundColor: '#fff',
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'scale(1.05)' },
                                textAlign: 'center',
                                height: '100%',
                            }}
                        >
                            <Player
                                autoplay
                                loop
                                src={deliveryAnimation}
                                style={{ height: '150px', width: '150px' }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '20px',
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
                                    fontSize: '16px',
                                    color: '#555',
                                    lineHeight: '1.6',
                                }}
                            >
                                Выбираете и оплачиваете товар на сайте, и наш менеджер связывается с вами...
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: '20px',
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
                                style={{ height: '150px', width: '150px' }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '20px',
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
                                    fontSize: '16px',
                                    color: '#555',
                                    lineHeight: '1.6',
                                }}
                            >
                                Забираете товар на ФБИУКС НИЯУ МИФИ по адресу Каширское шоссе, 31.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '16px',
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
        </Box>
    );
};

export default HomePage;
