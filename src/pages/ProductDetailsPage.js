import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Grid,
    Fade,
} from '@mui/material';
import ImageCarousel from '../components/ImageCarousel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';

const COLOR_TRANSLATIONS = {
    cream: 'Кремовый',
    black: 'Черный',
    white: 'Белый',
};

const COLOR_HEX = {
    cream: '#FFFDD0',
    black: '#000000',
    white: '#FFFFFF',
};

const ProductDetailsPage = ({ onAddToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const controller = new AbortController();
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://localhost:8443/products/${id}`, {
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw new Error('Сетевой ответ был не ок');
                }
                const data = await response.json();
                setProduct(data);
                setSelectedColor(data.colors?.[0] || '');
                setSelectedSize(data.sizes?.[0] || 'ONE SIZE');
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Ошибка при загрузке продукта:', error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();

        return () => {
            controller.abort();
        };
    }, [id]);

    const handleQuantityChange = useCallback((change) => {
        setQuantity((prev) => Math.max(prev + change, 1));
    }, []);

    const formattedPrice = useMemo(() => {
        return product
            ? new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(product.price)
            : '';
    }, [product]);

    const imagesToDisplay = useMemo(() => {
        if (!product) return [];
        const baseUrl = 'https://localhost:8443/uploads/images/'; // Используйте корректный базовый URL
        const filtered = product.images.filter((image) => image.color === selectedColor);
        return filtered.map(img => ({
            ...img,
            url: baseUrl + img.url.split('/').pop() // Создаем полный URL для каждого изображения
        }));
    }, [product, selectedColor]);

    return (
        <Container sx={{ mt: 4, minHeight: '80vh' }}>
            <Fade in={!loading} timeout={500}>
                <Box>
                    {product ? (
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ mt: 4, ml: '-130px' }}>
                                    <ImageCarousel images={imagesToDisplay} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ ml: '-40px' }}>
                                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#760073', mt: 5 }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 500, mt: 2, color: '#760073' }}>
                                        {formattedPrice}
                                    </Typography>
                                    <FormControl fullWidth margin="normal" sx={{ mt: 3, width: '88%' }}>
                                        <InputLabel id="color-label">Цвет</InputLabel>
                                        <Select
                                            labelId="color-label"
                                            value={selectedColor}
                                            onChange={(e) => setSelectedColor(e.target.value)}
                                            label="Цвет"
                                            sx={{
                                                '& .MuiSelect-select': {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                },
                                                backgroundColor: '#fff',
                                                borderRadius: '8px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            }}
                                            input={<OutlinedInput label="Цвет" />}
                                        >
                                            {product.colors.map((color) => (
                                                <MenuItem key={color} value={color}>
                                                    <Box
                                                        sx={{
                                                            width: 16,
                                                            height: 16,
                                                            backgroundColor: COLOR_HEX[color] || '#FFFFFF',
                                                            borderRadius: '50%',
                                                            marginRight: 1,
                                                            border: '1px solid #ccc',
                                                        }}
                                                    />
                                                    {COLOR_TRANSLATIONS[color] || color}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth margin="normal" sx={{ mt: 3, width: '88%' }}>
                                        <InputLabel id="size-label">Размер</InputLabel>
                                        <Select
                                            labelId="size-label"
                                            value={selectedSize}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                            label="Размер"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: '8px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            }}
                                            input={<OutlinedInput label="Размер" />}
                                        >
                                            {product.sizes.length > 0 ? (
                                                product.sizes.map((size) => (
                                                    <MenuItem key={size} value={size}>
                                                        {size}
                                                    </MenuItem>
                                                ))
                                            ) : (
                                                <MenuItem value="ONE SIZE">ONE SIZE</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                    <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', width: '80%' }}>
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleQuantityChange(-1)}
                                            sx={{
                                                minWidth: '36px',
                                                height: '36px',
                                                padding: 0,
                                                borderColor: '#760073',
                                                color: '#760073',
                                                '&:hover': {
                                                    borderColor: '#760073',
                                                    backgroundColor: '#f3e6f5',
                                                },
                                            }}
                                        >
                                            -
                                        </Button>
                                        <Typography variant="body1" sx={{ mx: 2, width: '60px', textAlign: 'center' }}>
                                            {quantity}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleQuantityChange(1)}
                                            sx={{
                                                minWidth: '36px',
                                                height: '36px',
                                                padding: 0,
                                                borderColor: '#760073',
                                                color: '#760073',
                                                '&:hover': {
                                                    borderColor: '#760073',
                                                    backgroundColor: '#f3e6f5',
                                                },
                                            }}
                                        >
                                            +
                                        </Button>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        startIcon={<AddShoppingCartIcon />}
                                        sx={{
                                            mt: 4,
                                            py: 1.5,
                                            backgroundColor: '#760073',
                                            color: '#ffffff',
                                            '&:hover': {
                                                backgroundColor: '#5a0060',
                                            },
                                            width: '88%',
                                        }}
                                        onClick={() => {
                                            onAddToCart({ ...product, selectedColor, selectedSize, quantity });
                                        }}
                                    >
                                        В корзину
                                    </Button>
                                    <Box sx={{ mt: 4 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#760073' }}>
                                            Описание
                                        </Typography>
                                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', color: '#555' }}>
                                            {product.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    ) : (
                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                            Продукт не найден.
                        </Typography>
                    )}
                </Box>
            </Fade>
        </Container>
    );
};

ProductDetailsPage.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetailsPage;
