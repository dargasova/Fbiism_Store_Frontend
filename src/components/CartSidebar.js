import React, {useEffect, useCallback, useMemo} from 'react';
import {
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const CartSidebar = React.memo(({cart, setCart, isOpen, onClose}) => {
    const navigate = useNavigate();

    const colorTranslations = useMemo(() => ({
        cream: 'кремовый',
        black: 'черный',
        white: 'белый',
    }), []);

    const updateLocalStorage = useCallback((updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }, []);

    useEffect(() => {
        if (cart.length === 0) {
            onClose();
        }
    }, [cart, onClose]);

    const handleDecreaseQuantity = useCallback((productId, selectedColor, selectedSize) => {
        setCart((prevCart) => {
            const updatedCart = prevCart
                .map((item) => {
                    if (
                        item.id === productId &&
                        item.selectedColor === selectedColor &&
                        item.selectedSize === selectedSize
                    ) {
                        return {...item, quantity: item.quantity - 1};
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0);
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    }, [setCart, updateLocalStorage]);

    const handleIncreaseQuantity = useCallback((productId, selectedColor, selectedSize) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) => {
                if (
                    item.id === productId &&
                    item.selectedColor === selectedColor &&
                    item.selectedSize === selectedSize
                ) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            });
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    }, [setCart, updateLocalStorage]);

    const handleRemoveAll = useCallback((productId, selectedColor, selectedSize) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => !(
                item.id === productId &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
            ));
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    }, [setCart, updateLocalStorage]);

    const handleProceedToCheckout = useCallback(() => {
        onClose();
        navigate('/checkout');
    }, [navigate, onClose]);

    const totalAmount = useMemo(() => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }, [cart]);

    return (
        <Drawer anchor="right" open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    width: {xs: '100%', sm: '530px'},
                    height: '100%',
                    backgroundColor: '#fff',
                    boxShadow: '-2px 0 5px rgba(0,0,0,0.5)',
                    overflowY: 'auto',
                    padding: '20px',
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={2}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            fontWeight: 700,
                        }}
                    >
                        Ваш заказ
                    </Typography>
                    <IconButton onClick={onClose} sx={{width: '40px', height: '40px'}}>
                        <CloseIcon sx={{fontSize: '30px'}}/>
                    </IconButton>
                </Box>
                {cart.length === 0 ? (
                    <Typography
                        variant="body1"
                        sx={{
                            padding: '0 16px',
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            fontWeight: 400,
                        }}
                    >
                        Ваша корзина пуста.
                    </Typography>
                ) : (
                    cart.map((product) => {
                        const baseUrl = 'https://localhost:8443/uploads/images/';
                        const mainImage = product.selectedColor
                            ? product.images.find(img => img.color === product.selectedColor)?.url || product.images[0]?.url
                            : product.images[0]?.url;

                        const fullImageUrl = mainImage ? baseUrl + mainImage.split('/').pop() : '';

                        const translatedColor = colorTranslations[product.selectedColor] || product.selectedColor;
                        const productTotal = product.price * product.quantity;

                        return (
                            <Box
                                key={`${product.id}-${product.selectedColor}-${product.selectedSize}`}
                                display="flex"
                                alignItems="center"
                                p={2}
                                borderBottom="1px solid #ccc"
                            >
                                {fullImageUrl && (
                                    <Box
                                        component="img"
                                        src={fullImageUrl}
                                        alt={product.name}
                                        sx={{
                                            width: '80px',
                                            height: '80px',
                                            objectFit: 'cover',
                                            marginRight: '15px',
                                        }}
                                    />
                                )}
                                <Box flex="1" mr={2}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: 'StyreneA, Arial, sans-serif',
                                            fontWeight: 700,
                                            color: '#000000',
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontFamily: 'StyreneA, Arial, sans-serif',
                                            fontWeight: 400,
                                        }}
                                    >
                                        Цвет: {translatedColor || 'Не выбран'}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontFamily: 'StyreneA, Arial, sans-serif',
                                            fontWeight: 400,
                                        }}
                                    >
                                        Размер: {product.selectedSize || 'ONE SIZE'}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" sx={{gap: '10px'}}>
                                    <IconButton
                                        onClick={() => handleDecreaseQuantity(product.id, product.selectedColor, product.selectedSize)}
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            border: '1px solid #ccc',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <RemoveIcon sx={{fontSize: '12px'}}/>
                                    </IconButton>
                                    <Typography
                                        sx={{
                                            fontFamily: 'StyreneA, Arial, sans-serif',
                                            fontWeight: 700,
                                        }}
                                    >
                                        {product.quantity}
                                    </Typography>
                                    <IconButton
                                        onClick={() => handleIncreaseQuantity(product.id, product.selectedColor, product.selectedSize)}
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                            border: '1px solid #ccc',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <AddIcon sx={{fontSize: '12px'}}/>
                                    </IconButton>
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'StyreneA, Arial, sans-serif',
                                        fontWeight: 700,
                                        textAlign: 'right',
                                        width: '80px',
                                    }}
                                >
                                    {productTotal} ₽
                                </Typography>
                                <IconButton
                                    onClick={() => handleRemoveAll(product.id, product.selectedColor, product.selectedSize)}
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                        border: '1px solid #ccc',
                                        borderRadius: '50%',
                                        marginLeft: '20px',
                                    }}
                                >
                                    <CloseIcon sx={{fontSize: '12px'}}/>
                                </IconButton>
                            </Box>
                        );
                    })
                )}
                {cart.length > 0 && (
                    <>
                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="center"
                            p={2}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 700,
                                }}
                            >
                                Сумма: {totalAmount} ₽
                            </Typography>
                        </Box>
                        <Box p={2}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#760073',
                                    color: 'white',
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    padding: '10px 0',
                                    borderRadius: '0px',
                                    '&:hover': {
                                        backgroundColor: '#59005a',
                                    },
                                }}
                                fullWidth
                                onClick={handleProceedToCheckout}
                            >
                                Дальше
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Drawer>
    );
});

CartSidebar.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string.isRequired,
                    color: PropTypes.string,
                })
            ).isRequired,
            selectedColor: PropTypes.string,
            selectedSize: PropTypes.string,
            quantity: PropTypes.number.isRequired,
            isFavorite: PropTypes.bool,
        })
    ).isRequired,
    setCart: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartSidebar;
