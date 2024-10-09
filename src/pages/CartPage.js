// src/pages/CartPage.js
import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const CartPage = ({ cart, setCart }) => {
    const navigate = useNavigate(); // Инициализируем navigate

    // Группируем товары в корзине по ID, цвету и размеру
    const groupedCart = cart.reduce((acc, product) => {
        const key = `${product.id}-${product.selectedColor || 'none'}-${product.selectedSize || 'none'}`;
        if (!acc[key]) {
            acc[key] = { ...product, quantity: 0 };
        }
        acc[key].quantity += product.quantity;
        return acc;
    }, {});

    const uniqueProducts = Object.values(groupedCart);

    const handleDecreaseQuantity = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            return prevCart.reduce((acc, item) => {
                if (item.id === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize) {
                    if (item.quantity > 1) {
                        // Уменьшаем количество на 1
                        acc.push({ ...item, quantity: item.quantity - 1 });
                    }
                    // Если quantity = 1, просто не добавляем его в acc, таким образом удаляем товар
                } else {
                    acc.push(item); // Добавляем товар без изменений
                }
                return acc;
            }, []);
        });
    };

    const handleIncreaseQuantity = (productId, selectedColor, selectedSize) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item =>
                item.id === productId &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
            );

            if (existingItemIndex !== -1) {
                // Увеличиваем количество товара
                return prevCart.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Если товар не существует в корзине, добавляем его
                return [...prevCart, { id: productId, selectedColor, selectedSize, quantity: 1 }];
            }
        });
    };

    const handleRemoveAll = (productId, selectedColor, selectedSize) => {
        setCart(prevCart =>
            prevCart.filter(item => !(item.id === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize))
        );
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
                            <ProductCard
                                product={{ ...product, quantity: product.quantity }}
                                hideActions={true}
                            />
                            <Typography variant="body1">Цвет: {product.selectedColor || 'Не выбран'}</Typography>
                            <Typography variant="body1">Размер: {product.selectedSize || 'Не выбран'}</Typography>
                            <Typography variant="body1">Количество: {product.quantity}</Typography>
                            <Button onClick={() => handleDecreaseQuantity(product.id, product.selectedColor, product.selectedSize)}>-</Button>
                            <Button onClick={() => handleIncreaseQuantity(product.id, product.selectedColor, product.selectedSize)}>+</Button>
                            <Button onClick={() => handleRemoveAll(product.id, product.selectedColor, product.selectedSize)}>Удалить все</Button>
                        </Grid>
                    ))}
                </Grid>
            )}
            {uniqueProducts.length > 0 && ( // Показываем кнопку оформления заказа, если в корзине есть товары
                <Button variant="contained" color="primary" onClick={() => navigate('/checkout', { state: { cart } })}>
                    Оформить
                </Button>
            )}
        </Container>
    );
};

export default CartPage;
