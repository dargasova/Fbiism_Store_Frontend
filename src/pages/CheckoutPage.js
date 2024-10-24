import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Grid,
    Box,
    Paper,
    Divider,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NumberFormatCustom from '../components/NumberFormatCustom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#760073',
        },
    },
    typography: {
        fontFamily: 'StyreneA, Arial, sans-serif',
    },
});

const CheckoutPage = ({ cart }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [cartError, setCartError] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        const formErrors = {};
        if (!surname.trim()) formErrors.surname = 'Введите фамилию';
        if (!name.trim()) formErrors.name = 'Введите имя';
        if (!patronymic.trim()) formErrors.patronymic = 'Введите отчество';

        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length !== 10) {
            formErrors.phone = 'Введите корректный номер телефона';
        }

        if (!email.trim()) formErrors.email = 'Введите электронную почту';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isCartEmpty) {
            setCartError('Ваша корзина пуста. Добавьте товары для оформления заказа.');
            return;
        } else {
            setCartError('');
        }

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const orderData = {
            name,
            surname,
            patronymic,
            phone,
            email,
            products: cart,
        };
        console.log('Order Data:', orderData);

        navigate('/payment');
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

    const totalItems = groupedCart.reduce((acc, product) => acc + product.quantity, 0);
    const isCartEmpty = totalItems === 0;

    return (
        <div style={{ backgroundColor: '#ebebeb', minHeight: '90vh' }}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        backgroundColor: '#ebebeb',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingTop: 2,
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
                            marginBottom: '50px',
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            align="center"
                            sx={{
                                fontWeight: 700,
                                color: '#760073',
                                mb: 3,
                                fontSize: { xs: '38px', md: '46px' },
                            }}
                        >
                            Оформление заказа
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => navigate('/catalog')}
                                sx={{ fontWeight: 500 }}
                            >
                                Назад к каталогу
                            </Button>
                        </Box>

                        {isCartEmpty && (
                            <Typography color="error" sx={{ mb: 2 }}>
                                Ваша корзина пуста. Добавьте товары для оформления заказа.
                            </Typography>
                        )}

                        {cartError && (
                            <Typography color="error" sx={{ mb: 2 }}>
                                {cartError}
                            </Typography>
                        )}

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={4} alignItems="flex-start">
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        <TextField
                                            label="Фамилия"
                                            fullWidth
                                            value={surname}
                                            onChange={(e) => setSurname(e.target.value)}
                                            required
                                            variant="outlined"
                                            error={!!errors.surname}
                                            helperText={errors.surname}
                                            InputProps={{
                                                style: { fontWeight: 400 },
                                            }}
                                        />
                                        <TextField
                                            label="Имя"
                                            fullWidth
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            variant="outlined"
                                            error={!!errors.name}
                                            helperText={errors.name}
                                            InputProps={{
                                                style: { fontWeight: 400 },
                                            }}
                                        />
                                        <TextField
                                            label="Отчество"
                                            fullWidth
                                            value={patronymic}
                                            onChange={(e) => setPatronymic(e.target.value)}
                                            required
                                            variant="outlined"
                                            error={!!errors.patronymic}
                                            helperText={errors.patronymic}
                                            InputProps={{
                                                style: { fontWeight: 400 },
                                            }}
                                        />
                                        <TextField
                                            fullWidth
                                            required
                                            variant="outlined"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            error={!!errors.phone}
                                            helperText={errors.phone}
                                            InputProps={{
                                                inputComponent: NumberFormatCustom,
                                            }}
                                            inputProps={{
                                                name: 'phone',
                                            }}
                                        />
                                        <TextField
                                            label="Электронная почта"
                                            fullWidth
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            variant="outlined"
                                            error={!!errors.email}
                                            helperText={errors.email}
                                            InputProps={{
                                                style: { fontWeight: 400 },
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <Box sx={{ flex: 1, overflowY: 'auto' }}>
                                            {groupedCart.map((product, index) => {
                                                const mainImage = product.selectedColor
                                                    ? product.images.find(img => img.color === product.selectedColor)?.url || product.images[0]?.url
                                                    : product.images[0]?.url;

                                                const fullImageUrl = mainImage ? `https://localhost:8443/uploads/images/${mainImage.split('/').pop()}` : ''; // Формируем полный URL

                                                return (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            mb: 3,
                                                            padding: 2,
                                                            backgroundColor: '#fff',
                                                            borderRadius: 1,
                                                            border: '1px solid rgba(196, 196, 196)',
                                                        }}
                                                    >
                                                        {fullImageUrl && (
                                                            <img
                                                                src={fullImageUrl}
                                                                alt={product.name}
                                                                style={{
                                                                    width: '80px',
                                                                    height: '80px',
                                                                    objectFit: 'cover',
                                                                    borderRadius: '8px',
                                                                    marginRight: '20px',
                                                                }}
                                                            />
                                                        )}
                                                        <Box flex="1">
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    fontWeight: 700,
                                                                    mb: 1,
                                                                }}
                                                            >
                                                                {product.name}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    fontWeight: 400,
                                                                    color: 'black',
                                                                }}
                                                            >
                                                                Цвет: {product.selectedColor || 'Не выбран'},
                                                                Размер: {product.selectedSize || 'Не выбран'}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    mt: 1,
                                                                    color: 'black',
                                                                }}
                                                            >
                                                                Количество: {product.quantity} шт.
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    fontWeight: 700,
                                                                    textAlign: 'right',
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
                                                    color: 'black',
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
                                        fontWeight: 500,
                                    }}
                                    disabled={isCartEmpty}
                                >
                                    Перейти к оплате
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default CheckoutPage;
