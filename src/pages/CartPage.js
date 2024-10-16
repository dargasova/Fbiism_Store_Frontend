import React, {useEffect} from 'react';
import {Container, Typography, Grid, Button, Box, Paper} from '@mui/material';
import ProductCard from '../components/ProductCard';
import {useNavigate} from 'react-router-dom';

const CartPage = ({cart, setCart}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, [setCart]);

    const groupedCart = cart.reduce((acc, product) => {
        const key = `${product.id}-${product.selectedColor || 'none'}-${product.selectedSize || 'none'}`;
        if (!acc[key]) {
            acc[key] = {...product, quantity: 0};
        }
        acc[key].quantity += product.quantity;
        return acc;
    }, {});

    const uniqueProducts = Object.values(groupedCart);

    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDecreaseQuantity = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item =>
                item.id === productId &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
            );

            if (existingItemIndex !== -1) {
                const existingItem = prevCart[existingItemIndex];
                if (existingItem.quantity > 1) {
                    const updatedCart = prevCart.map((item, index) =>
                        index === existingItemIndex ? {...item, quantity: item.quantity - 1} : item
                    );
                    updateLocalStorage(updatedCart);
                    return updatedCart;
                } else {
                    const updatedCart = prevCart.filter((_, index) => index !== existingItemIndex);
                    updateLocalStorage(updatedCart);
                    return updatedCart;
                }
            }
            return prevCart;
        });
    };

    const handleIncreaseQuantity = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item =>
                item.id === productId &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
            );

            let updatedCart;

            if (existingItemIndex !== -1) {
                updatedCart = prevCart.map((item, index) =>
                    index === existingItemIndex ? {...item, quantity: item.quantity + 1} : item
                );
            } else {
                updatedCart = [...prevCart, {...prevCart[0], selectedColor, selectedSize, quantity: 1}];
            }

            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    const handleRemoveAll = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => {
                const isSameProduct = item.id === productId;
                const isSameColor = item.selectedColor === selectedColor || (!item.selectedColor && !selectedColor);
                const isSameSize = item.selectedSize === selectedSize || (!item.selectedSize && !selectedSize);

                return !(isSameProduct && isSameColor && isSameSize);
            });
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Корзина
            </Typography>
            {uniqueProducts.length === 0 ? (
                <Typography variant="h6">Ваша корзина пуста.</Typography>
            ) : (
                <Grid container spacing={2}>
                    {uniqueProducts.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper elevation={3} style={{padding: '16px', borderRadius: '8px', height: '600px'}}>
                                <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                                    <ProductCard
                                        product={{...product, quantity: product.quantity}}
                                        hideActions={true}
                                        style={{flex: '1'}}
                                    />
                                    <Typography
                                        variant="body1">Цвет: {product.selectedColor || 'Не выбран'}</Typography>
                                    <Typography
                                        variant="body1">Размер: {product.selectedSize || 'Не выбран'}</Typography>
                                    <Typography variant="body1">Количество: {product.quantity}</Typography>
                                    <Box display="flex" justifyContent="space-between" alignItems="center"
                                         marginTop={2}>
                                        <Button variant="outlined"
                                                onClick={() => handleDecreaseQuantity(product.id, product.selectedColor, product.selectedSize)}>-</Button>
                                        <Button variant="outlined"
                                                onClick={() => handleIncreaseQuantity(product.id, product.selectedColor, product.selectedSize)}>+</Button>
                                        <Button variant="contained" color="secondary"
                                                onClick={() => handleRemoveAll(product.id, product.selectedColor, product.selectedSize)}>Удалить
                                            все</Button>
                                    </Box>
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            )}
            {uniqueProducts.length > 0 && (
                <Button variant="contained" color="primary" onClick={() => navigate('/checkout', {state: {cart}})}
                        style={{marginTop: '16px'}}>
                    Оформить
                </Button>
            )}
        </Container>
    );
};

export default CartPage;
