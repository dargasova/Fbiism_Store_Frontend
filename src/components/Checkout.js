// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import InputMask from 'react-input-mask';

const CheckoutPage = () => {
    const { state } = useLocation();
    const { cart } = state || { cart: [] }; // Получаем корзину из состояния навигации
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Здесь вы можете отправить данные на сервер или выполнить другую логику
        const orderData = {
            name,
            phone,
            email,
            products: cart
        };

        console.log('Данные заказа:', orderData);
        // Здесь можно сделать запрос на сервер для сохранения данных заказа
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Оформление заказа
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Имя"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputMask
                            mask="+7 (999) 999-99-99"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        >
                            {() => (
                                <TextField
                                    label="Номер телефона"
                                    fullWidth
                                    title="Введите номер в формате +7 (XXX) XXX-XX-XX"
                                />
                            )}
                        </InputMask>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Электронная почта"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                    Выбранные товары:
                </Typography>
                {cart.map((product, index) => (
                    <Typography key={index}>
                        {product.name} - Цвет: {product.selectedColor || 'Не выбран'}, Размер: {product.selectedSize || 'Не выбран'} - {product.quantity} шт.
                    </Typography>
                ))}
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                    Перейти к оплате
                </Button>
            </form>
        </Container>
    );
};

export default CheckoutPage;
