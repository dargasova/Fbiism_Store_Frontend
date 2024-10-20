import React from 'react';
import {Container, Typography, Button, Box, Divider, Grid} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import product1 from '../images/product1_colorcream_image4_photoroom.png';
import product2 from '../images/product2_colorblack_image1_photoroom.png';
import product3 from '../images/product3_colorblack_image1_photoroom.png';
import {Player} from "@lottiefiles/react-lottie-player";
import deliverySchema from '../images/delivery_schema.png';
import courierAnimation from '../animations/courier.json';


const primaryColor = '#760073';
const backgroundColor = '#ebebeb'; // Теплый серый фон

const HomePage = () => {
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        navigate('/catalog');
    };

    return (
        <Box sx={{
            width: '100%',
            backgroundColor: backgroundColor,
            padding: '0px 0'
        }}> {/* Теплый серый фон и небольшой отступ */}
            <Box
                id="home" // Добавляем ID
                sx={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: '700px', // Увеличена высота контейнера
                    overflow: 'hidden',
                    scrollMarginTop: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    outline: 'none',
                }}> {/* Контейнер с выравниванием по центру */}
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                marginLeft: {
                                    xs: '-20px',
                                    md: '-98px'
                                }
                            }}> {/* Подкорректирован отступ текста и кнопки */}
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: {xs: '50px', md: '70px'}, // Увеличен размер шрифта
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
                                        borderWidth: '1.5px', // шире обводка
                                        borderRadius: '30px', // округлая обводка
                                        '&:hover': {
                                            borderColor: '#5a0060',
                                            color: '#5a0060',
                                        },
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontSize: '20px', // Увеличен размер шрифта
                                        fontWeight: 600,
                                        padding: '12px 35px', // Увеличен padding
                                    }}
                                >
                                    Каталог
                                </Button>

                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                position: 'relative',
                                height: '100%'
                            }}> {/* Относительное позиционирование для контейнера изображений */}
                                <img
                                    src={product1}
                                    alt="Product 1"
                                    style={{
                                        width: '420px', // Увеличен размер изображения
                                        height: '420px', // Увеличен размер изображения
                                        objectFit: 'cover',
                                        transform: 'rotate(6deg)',
                                        position: 'absolute',
                                        top: '-180px', // Корректировка для худи
                                        left: '450px', // Корректировка позиции
                                        zIndex: 2,
                                    }}
                                />
                                <img
                                    src={product2}
                                    alt="Product 2"
                                    style={{
                                        width: '340px', // Увеличен размер изображения
                                        height: '340px', // Увеличен размер изображения
                                        objectFit: 'cover',
                                        transform: 'rotate(-10deg)',
                                        position: 'absolute',
                                        top: '-230px', // Корректировка для футболки
                                        left: '20px', // Корректировка позиции
                                        zIndex: 1,
                                    }}
                                />
                                <img
                                    src={product3}
                                    alt="Product 3"
                                    style={{
                                        width: '140px', // Увеличен размер изображения
                                        height: '140px', // Увеличен размер изображения
                                        objectFit: 'cover',
                                        transform: 'rotate(-2deg)',
                                        position: 'absolute',
                                        top: '-5px', // Корректировка для кружки
                                        left: '195px', // Корректировка позиции
                                        zIndex: 3,
                                    }}
                                />

                                {/* Добавляем изображение line.png */}
                                <img
                                    src={require('C:/Users/User/fbiism_store/src/images/line.png')}
                                    alt="Line decoration"
                                    style={{
                                        width: '1700px', // Увеличен размер изображения
                                        height: 'auto',
                                        transform: 'rotate(-2deg)',
                                        position: 'absolute',
                                        top: '-190px',
                                        left: '-400px',
                                        zIndex: 0, // Самый нижний слой
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            <Divider sx={{color: primaryColor, margin: '30px 0', borderBottomWidth: 0, backgroundColor: primaryColor}}/>
            {/* Секция "О нас" */}
            <Box sx={{
                backgroundColor: '#fff',
                width: '100%',
                height: '700px', // Уменьшена высота секции
                overflow: 'hidden',
                scrollMarginTop: '100px',
                display: 'flex',
                alignItems: 'center',
                outline: 'none',
            }}> {/* Контейнер с выравниванием по центру */}
                <Grid container spacing={4} alignItems="center" id="about" sx={{scrollMarginTop: "100px"}}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                paddingLeft: {xs: '25px', md: '150px'},
                                paddingRight: {xs: '25px', md: '50px'},
                                maxWidth: '580px', // Ограничение ширины текста
                                margin: '0 auto' // Выравнивание по центру
                            }}
                        >
                            {/* Уменьшены отступы */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: {xs: '38px', md: '46px'}, // Размер текста немного уменьшен
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
                                    fontSize: '20px', // Оставлен стандартный размер
                                    color: '#000000',
                                    lineHeight: '1.6', // Стандартное расстояние между строками
                                }}
                            >
                                Мы — команда людей, объединенных любовью к аналитике, знаниям и стилю. Наша миссия —
                                предоставить студентам и выпускникам ФБИУКС уникальную возможность выразить свою
                                приверженность факультету через стиль и комфорт.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontSize: '20px',
                                    color: '#000000',
                                    lineHeight: '1.6', // Оставлено стандартное расстояние между строками
                                }}
                            >
                                Каждая наша деталь продумана до мельчайших нюансов. Мы стремимся к совершенству в каждом
                                пошиве, ценя ваши высокие стандарты.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
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
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            position: 'relative',
                            height: '100%'
                        }}> {/* Ряд изображений */}
                            <img
                                src={require('C:/Users/User/fbiism_store/src/images/hearts.png')}
                                alt="О нас"
                                style={{
                                    width: '320px',
                                    height: 'auto',
                                    transform: 'scaleX(-1)', // Сохранение отзеркаливания
                                    position: 'relative',
                                    top: '-160px',
                                    left: '490px',
                                    marginRight: '20px',
                                    animation: 'heartbeat 2s ease-in-out infinite', // Анимация биения сердца
                                }}
                            />

                            <style>
                                {`
    @keyframes heartbeat {
        0% {
            transform: scale(1) scaleX(-1); // Исходный размер и отзеркаливание
        }
        30% {
            transform: scale(1.05) scaleX(-1); // Легкое увеличение на 5%
        }
        60% {
            transform: scale(1) scaleX(-1); // Возврат к исходному размеру
        }
        100% {
            transform: scale(1) scaleX(-1); // Конечное положение
        }
    }
    `}
                            </style>

                            <img
                                src={require('C:/Users/User/fbiism_store/src/images/product1_colorcream_image4_photoroom_people.png')}
                                alt="Product 1"
                                style={{
                                    width: '370px', // Немного уменьшен размер изображения
                                    height: 'auto',
                                    position: 'relative',
                                    top: '120px',
                                    left: '300px',
                                    marginRight: '20px',
                                }}
                            />
                            <img
                                src={require('C:/Users/User/fbiism_store/src/images/product2_colorblack_image3_photoroom_people.png')}
                                alt="Product 2"
                                style={{
                                    width: '470px', // Уменьшен размер изображения
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


            <Divider sx={{color: primaryColor, margin: '30px 0', borderBottomWidth: 0, backgroundColor: primaryColor}}/>

            {/* Секция "Доставка" */}
            <Box
                sx={{
                    backgroundColor: '#fff',
                    paddingTop: '70px', // Отступ сверху
                    marginBottom: '-20px',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 0,
                    outline: 'none',
                    scrollMarginTop: '100px'
                }}
                id="delivery"
            >

                {/* Добавляем line.png под остальным контентом, но над фоном */}
                <img
                    src={require('C:/Users/User/fbiism_store/src/images/line.png')}
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

                {/* Общий контейнер для заголовка и текста с единым отступом слева */}
                <Box
                    sx={{
                        paddingLeft: '175px', // Единый отступ слева
                        paddingRight: {xs: '20px', md: '175px'}, // Отступ справа для адаптивности
                    }}
                >
                    {/* Заголовок "Доставка" */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            fontSize: {xs: '36px', md: '44px'},
                            fontWeight: 700,
                            color: primaryColor,
                            textAlign: 'left',
                            marginBottom: '20px',
                        }}
                    >
                        Доставка
                    </Typography>

                    {/* Добавляем список с информацией */}
                    <Box
                        sx={{
                            position: 'relative',
                            maxWidth: '1000px',
                            textAlign: 'left',
                        }}
                    >
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
                        <ul
                            style={{
                                listStyleType: 'none',
                                padding: 0,
                                margin: 0,
                            }}
                        >
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
                            <li
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
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

                {/* Контейнер для изображения и анимации */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        marginTop: '70px',
                        paddingLeft: '175px', // Соответствует отступу заголовка и текста
                    }}
                >
                    {/* Возвращаем анимацию "курьер" */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-5px', // Регулируйте по необходимости
                            right: '840px', // Регулируйте по необходимости
                            width: '150px',
                            height: '150px',
                            pointerEvents: 'none',
                            zIndex: 2,
                        }}
                    >
                        <Player
                            autoplay
                            loop
                            src={courierAnimation}
                            style={{height: '100%', width: '100%'}}
                        />
                    </Box>

                    <img
                        src={deliverySchema}
                        alt="Delivery Schema"
                        style={{
                            width: '60%',
                            display: 'block', // Используем block для правильного выравнивания
                            marginLeft: '0', // Удаляем margin-left, так как padding уже установлен
                        }}
                    />
                </Box>
            </Box>


        </Box>
    );
};

export default HomePage;
