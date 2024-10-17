import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Box, Paper, Divider } from '@mui/material';
import InputMask from 'react-input-mask';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#760073',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'StyreneA, Arial, sans-serif',
    },
});

const CheckoutPage = ({ cart }) => {
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
        console.log('Order Data:', orderData);
    };

    const getGroupedProducts = () => {
        const groupedProducts = cart.reduce((acc, product) => {
            const key = `${product.id}-${product.selectedColor || 'Не выбран'}-${product.selectedSize || 'Не выбран'}`;
            if (!acc[key]) {
                acc[key] = { ...product, quantity: 0 };
            }
            acc[key].quantity += product.quantity;
            return acc;
        }, {});

        return Object.values(groupedProducts);
    };

    const groupedCart = getGroupedProducts();

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: '#f5f5f5',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: 2,
                    paddingBottom: 4,
                    paddingLeft: { xs: 1, sm: 2 },
                    paddingRight: { xs: 1, sm: 2 },
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        padding: { xs: 3, md: 6 },
                        borderRadius: 2,
                        width: '100%',
                        maxWidth: '1200px',
                        boxShadow: 3,
                        backgroundColor: '#fff',
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 3
                        }}
                    >
                        Оформление заказа
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'space-between', height: '100%' }}>
                                    <TextField
                                        label="Имя"
                                        fullWidth
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        variant="outlined"
                                        InputProps={{
                                            style: { fontWeight: 400 }
                                        }}
                                    />
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
                                                variant="outlined"
                                                InputProps={{
                                                    style: { fontWeight: 400 }
                                                }}
                                            />
                                        )}
                                    </InputMask>
                                    <TextField
                                        label="Электронная почта"
                                        fullWidth
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        variant="outlined"
                                        InputProps={{
                                            style: { fontWeight: 400 }
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <Divider sx={{ mb: 2 }} />
                                    <Box sx={{ flex: 1, overflowY: 'auto' }}>
                                        {groupedCart.map((product, index) => {
                                            let mainImage;
                                            if (product.id === 1) {
                                                mainImage = product.images[product.images.length - 1]?.url;
                                            } else {
                                                mainImage = product.selectedColor
                                                    ? product.images.find(img => img.color === product.selectedColor)?.url || product.images[0]?.url
                                                    : product.images[0]?.url;
                                            }

                                            return (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        mb: 3,
                                                        padding: 2,
                                                        backgroundColor: '#f9f9f9',
                                                        borderRadius: 2,
                                                        boxShadow: 1,
                                                    }}
                                                >
                                                    {mainImage && (
                                                        <img
                                                            src={mainImage}
                                                            alt={product.name}
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                objectFit: 'cover',
                                                                borderRadius: '8px',
                                                                marginRight: '20px'
                                                            }}
                                                        />
                                                    )}
                                                    <Box flex="1">
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: 700,
                                                                mb: 1
                                                            }}
                                                        >
                                                            {product.name}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                fontWeight: 400,
                                                                color: '#555'
                                                            }}
                                                        >
                                                            Цвет: {product.selectedColor || 'Не выбран'}, Размер: {product.selectedSize || 'Не выбран'}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                fontWeight: 500,
                                                                mt: 1
                                                            }}
                                                        >
                                                            Количество: {product.quantity} шт.
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                fontWeight: 500,
                                                                mt: 0.5
                                                            }}
                                                        >
                                                            Цена: {product.price} ₽ за шт.
                                                        </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: 700,
                                                                textAlign: 'right'
                                                            }}
                                                        >
                                                            {product.price * product.quantity} ₽
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                    <Divider sx={{ mt: 2, mb: 2 }} />
                                    <Box display="flex" justifyContent="flex-end">
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                color: 'primary.main'
                                            }}
                                        >
                                            Общая сумма: {groupedCart.reduce((total, product) => total + product.price * product.quantity, 0)} ₽
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                                size="large"
                                sx={{
                                    paddingY: 1.5,
                                    fontWeight: 500
                                }}
                            >
                                Перейти к оплате
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default CheckoutPage;
