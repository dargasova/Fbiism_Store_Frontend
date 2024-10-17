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
import { styled } from '@mui/system';
import { HashLink } from 'react-router-hash-link';
import shoppingBagIcon from '../images/shopping-bag-icon.png';
import logoImage from '../images/logo_fbiism.png';

const CustomFab = styled(Fab)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#760073',
    '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: '#760073',
    },
}));

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
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
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    height: '100px',
                }}
            >
                <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Toolbar
                        disableGutters
                        sx={{
                            backgroundColor: '#d9dce1',
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
                            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                            onClick={handleLogoClick}  // Добавляем обработчик нажатия
                        >
                            <img src={logoImage} alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
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
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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

            {/* Отступ для фиксированной Navbar */}
            <Toolbar />

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
                                top: '-5px',
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
        </>
    );
};

export default Navbar;
