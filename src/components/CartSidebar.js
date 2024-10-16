import React, {useEffect} from 'react';
import {Typography, Box, Button, IconButton, Drawer} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartSidebar = ({cart, setCart, isOpen, onClose}) => {
    const colorTranslations = {
        'cream': 'кремовый',
        'black': 'черный',
        'white': 'белый'
    };

    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        if (cart.length === 0) {
            onClose();
        }
    }, [cart, onClose]);

    const handleDecreaseQuantity = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (
                    item.id === productId &&
                    item.selectedColor === selectedColor &&
                    item.selectedSize === selectedSize
                ) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            }).filter(item => item.quantity > 0);
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    const handleIncreaseQuantity = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
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
    };

    const handleRemoveAll = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => !(
                item.id === productId &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
            ));
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    return (
        <Drawer anchor="right" open={isOpen} onClose={onClose}>
            <div
                style={{
                    width: '530px',
                    height: '100%',
                    backgroundColor: '#fff',
                    boxShadow: '-2px 0 5px rgba(0,0,0,0.5)',
                    overflowY: 'auto',
                    padding: '20px'
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    <Typography variant="h5" style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 700}}>
                        Ваш заказ
                    </Typography>
                    <IconButton onClick={onClose} style={{width: '40px', height: '40px'}}>
                        <CloseIcon style={{fontSize: '30px'}}/>
                    </IconButton>
                </Box>
                {cart.length === 0 ? (
                    <Typography variant="body1"
                                style={{padding: '0 16px', fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 400}}>
                        Ваша корзина пуста.
                    </Typography>
                ) : (
                    cart.map((product, index) => {
                        let mainImage = product.selectedColor
                            ? product.images.find(img => img.color === product.selectedColor)?.url || product.images[0]?.url
                            : product.images[0]?.url;

                        const translatedColor = colorTranslations[product.selectedColor] || product.selectedColor;

                        return (
                            <Box key={index} display="flex" alignItems="center" p={2} borderBottom="1px solid #ccc">
                                {mainImage && (
                                    <img
                                        src={mainImage}
                                        alt={product.name}
                                        style={{width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px'}}
                                    />
                                )}
                                <Box flex="1" mr={2}>
                                    <Typography variant="body1"
                                                style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 700}}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2"
                                                style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 400}}>
                                        Цвет: {translatedColor || 'Не выбран'}
                                    </Typography>
                                    <Typography variant="body2"
                                                style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 400}}>
                                        Размер: {product.selectedSize || 'Не выбран'}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" style={{gap: '10px'}}>
                                    <IconButton
                                        onClick={() => handleDecreaseQuantity(product.id, product.selectedColor, product.selectedSize)}
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            border: '1px solid #ccc',
                                            borderRadius: '50%'
                                        }}>
                                        <RemoveIcon style={{fontSize: '12px'}}/>
                                    </IconButton>
                                    <Typography style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 700}}>
                                        {product.quantity}
                                    </Typography>
                                    <IconButton
                                        onClick={() => handleIncreaseQuantity(product.id, product.selectedColor, product.selectedSize)}
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            border: '1px solid #ccc',
                                            borderRadius: '50%'
                                        }}>
                                        <AddIcon style={{fontSize: '12px'}}/>
                                    </IconButton>
                                </Box>
                                <Typography style={{
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 700,
                                    textAlign: 'right',
                                    width: '80px'
                                }}>
                                    {product.price * product.quantity} ₽
                                </Typography>
                                <IconButton
                                    onClick={() => handleRemoveAll(product.id, product.selectedColor, product.selectedSize)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        border: '1px solid #ccc',
                                        borderRadius: '50%',
                                        marginLeft: '20px'
                                    }}>
                                    <CloseIcon style={{fontSize: '12px'}}/>
                                </IconButton>
                            </Box>
                        );
                    })
                )}
                <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
                    <Typography variant="h6" style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 700}}>
                        Сумма: {cart.reduce((total, product) => total + product.price * product.quantity, 0)} ₽
                    </Typography>
                </Box>
                <Box p={2}>
                    <Button variant="contained" style={{
                        backgroundColor: '#760073',
                        color: 'white',
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        fontWeight: 500
                    }} fullWidth>
                        Дальше
                    </Button>
                </Box>
            </div>
        </Drawer>
    );
};

export default CartSidebar;
