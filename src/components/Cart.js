// src/components/Cart.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Cart = ({ cart }) => {
    const history = useHistory();

    const handleCheckout = () => {
        history.push({
            pathname: '/checkout',
            state: { cart }, // Передаем корзину в состояние
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Корзина
            </Typography>
            {cart.length === 0 ? (
                <Typography>Ваша корзина пуста.</Typography>
            ) : (
                <div>
                    <Typography variant="h6">Товары в корзине:</Typography>
                    {cart.map((item, index) => (
                        <Typography key={index}>
                            {item.name} - {item.quantity} шт.
                        </Typography>
                    ))}
                    <Button variant="contained" color="primary" onClick={handleCheckout}>
                        Оформить заказ
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Cart;
