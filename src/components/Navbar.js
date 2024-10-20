import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Fab,
    Badge,
    Tooltip,
    Container
} from '@mui/material';
import {styled} from '@mui/system';
import {HashLink} from 'react-router-hash-link';
import shoppingBagIcon from '../images/shopping-bag-icon.png';
import logoImage from '../images/logo_fbiism.png';
import { Link, useLocation } from 'react-router-dom';  // Добавили useLocation

const CustomFab = styled(Fab)(({theme}) => ({
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#760073',
    '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: '#760073',
    },

}));

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






const CustomTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .MuiTooltip-tooltip`]: {
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '16px',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    [`& .MuiTooltip-arrow`]: {
        color: '#000',
    },
}));

const Navbar = ({ cart, onOpenCart, onOpenAskQuestion }) => {
    const location = useLocation(); // Получаем текущий путь
    const isCheckoutPage = location.pathname === '/checkout'; // Проверяем, находимся ли мы на странице оформления заказа
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const handleLogoClick = () => {
        window.location.href = '/';
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: '#ebebeb',
                    boxShadow: 'none',
                    height: '100px',
                }}
            >
                <Container maxWidth="lg" sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                    <Toolbar
                        disableGutters
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '40px',
                            height: '60px',
                            width: '100%',
                            padding: '0 24px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {/* Логотип и название магазина */}
                        <Box
                            sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                            onClick={handleLogoClick}
                        >
                            <img src={logoImage} alt="Logo" style={{height: '40px', marginRight: '8px'}}/>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    color: '#760073',
                                    fontSize: '20px',
                                }}
                            >
                                FBIISM STORE
                            </Typography>
                        </Box>

                        {/* Навигационные ссылки */}
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Button
                                component={HashLink}
                                smooth
                                to="/#"
                                variant="text"
                                disableRipple
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                    color: '#760073',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#FFA500',
                                    },
                                }}
                            >
                                Главная
                            </Button>

                            <Button
                                component={HashLink}
                                smooth
                                to="/catalog"
                                variant="text"
                                disableRipple
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                    color: '#760073',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#FFA500',
                                    },
                                }}
                            >
                                Каталог
                            </Button>

                            <Button
                                component={HashLink}
                                smooth
                                to="/#about"
                                variant="text"
                                disableRipple
                                onClick={() => scrollToSection("#about")}
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                    color: '#760073',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#FFA500',
                                    },
                                }}
                            >
                                О нас
                            </Button>

                            <Button
                                component={HashLink}
                                smooth
                                to="/#delivery"
                                variant="text"
                                disableRipple
                                onClick={() => scrollToSection("#delivery")}
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                    color: '#760073',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#FFA500',
                                    },
                                }}
                            >
                                Доставка
                            </Button>

                            <Button
                                component={HashLink}
                                smooth
                                to="/#contacts"
                                variant="text"
                                disableRipple
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                    color: '#760073',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#FFA500',
                                    },
                                }}
                            >
                                Контакты
                            </Button>
                        </Box>

                        {/* Кнопка "Задать вопрос" */}
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Button
                                variant="contained"
                                onClick={onOpenAskQuestion}
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                    backgroundColor: '#760073',
                                    color: '#ffffff',
                                    borderRadius: '24px',
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    '&:hover': {
                                        backgroundColor: '#FFA500',
                                    },
                                }}
                            >
                                Задать вопрос
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Убрали отступ для фиксированной Navbar */}
            {/* <Toolbar /> */}

            {!isCheckoutPage && ( // Условие для скрытия корзины на странице оформления заказа
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '0',
                    }}
                >
                    {totalQuantity > 0 && (
                        <CustomTooltip
                            title={`= ${totalPrice.toLocaleString()} ₽`}
                            arrow
                            placement="left"
                            enterTouchDelay={0}
                        >
                            <CustomFab
                                color="primary"
                                aria-label="cart"
                                sx={{
                                    position: 'absolute',
                                    top: '30px',
                                    right: '20px',
                                    width: '80px',
                                    height: '80px',
                                    zIndex: 10,
                                }}
                                onClick={onOpenCart}
                            >
                                <Badge
                                    badgeContent={totalQuantity}
                                    color="primary"
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            backgroundColor: '#000',
                                            color: '#fff',
                                            fontSize: '12px',
                                        },
                                    }}
                                >
                                    <img
                                        src={shoppingBagIcon}
                                        alt="Корзина"
                                        style={{ width: '45px', height: '45px' }}
                                    />
                                </Badge>
                            </CustomFab>
                        </CustomTooltip>
                    )}
                </Box>
            )}

        </>
    );
};

export default Navbar;
