import React, {useState} from 'react';
import {Container, Typography, TextField, Button, Grid} from '@mui/material';
import {useLocation} from 'react-router-dom';
import InputMask from 'react-input-mask';

const CheckoutPage = () => {
    const {state} = useLocation();
    const {cart} = state || {cart: []};
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderData = {
            name,
            phone,
            email,
            products: cart
        };
    };

    const getGroupedProducts = () => {
        const groupedProducts = cart.reduce((acc, product) => {
            const key = `${product.name}-${product.selectedColor || 'Не выбран'}-${product.selectedSize || 'Не выбран'}`;
            if (!acc[key]) {
                acc[key] = {...product, quantity: 0};
            }
            acc[key].quantity += product.quantity;
            return acc;
        }, {});

        return Object.values(groupedProducts);
    };

    const groupedCart = getGroupedProducts();

    return (
        <Container>
            <Typography variant="h4" gutterBottom style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 700}}>
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
                            InputProps={{style: {fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 400}}}
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
                                    InputProps={{style: {fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 400}}}
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
                            InputProps={{style: {fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 400}}}
                        />
                    </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom
                            style={{marginTop: '20px', fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 600}}>
                    Выбранные товары:
                </Typography>
                {groupedCart.map((product, index) => (
                    <Typography key={index} style={{fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 400}}>
                        {product.name} - Цвет: {product.selectedColor || 'Не выбран'},
                        Размер: {product.selectedSize || 'Не выбран'} - {product.quantity} шт.
                    </Typography>
                ))}
                <Button variant="contained" color="primary" type="submit"
                        style={{marginTop: '20px', fontFamily: 'StyreneA, Arial, sans-serif', fontWeight: 500}}>
                    Перейти к оплате
                </Button>
            </form>
        </Container>
    );
};

export default CheckoutPage;
