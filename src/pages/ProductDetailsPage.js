// ProductDetailsPage.jsx
import React, { useEffect, useState } from 'react';
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
    Fade, // Импортируем компонент Fade
} from '@mui/material';
import ImageCarousel from '../components/ImageCarousel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import OutlinedInput from '@mui/material/OutlinedInput';

const ProductDetailsPage = ({ onAddToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const colorTranslations = {
        cream: 'Кремовый',
        black: 'Черный',
        white: 'Белый',
    };

    const colorHex = {
        cream: '#FFFDD0',
        black: '#000000',
        white: '#FFFFFF',
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8080/products/${id}`);
                if (!response.ok) {
                    throw new Error('Сетевой ответ был не ок');
                }
                const data = await response.json();
                setProduct(data);

                if (data.colors && data.colors.length > 0) {
                    setSelectedColor(data.colors[0]);
                }

                // Проверяем, есть ли размеры, если нет — устанавливаем "ONE SIZE"
                if (data.sizes && data.sizes.length > 0) {
                    setSelectedSize(data.sizes[0]);
                } else {
                    setSelectedSize('ONE SIZE');
                }

                setLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке продукта:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);


    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;
            return newQuantity < 1 ? 1 : newQuantity;
        });
    };

    // Удаляем условный рендеринг "Загрузка..."

    // Форматирование цены
    const formattedPrice = product
        ? new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(product.price)
        : '';

    // Фильтрация изображений по выбранному цвету
    const filteredImages = product
        ? product.images.filter((image) => image.color === selectedColor)
        : [];
    const imagesToDisplay = id === '1' ? filteredImages.slice().reverse() : filteredImages;

    return (
        <Container sx={{mt: 4, minHeight: '80vh'}}>
            {/* Используем компонент Fade для плавного появления содержимого */}
            <Fade in={!loading} timeout={500}>
                {product ? (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            {/* Отступ сверху у карусели и отодвигаем на 50px левее */}
                            <Box sx={{mt: 4, ml: '-130px'}}>
                                <ImageCarousel images={imagesToDisplay} />
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={6}>
                            {/* Обертка для смещения всех элементов влево на 100px */}
                            <Box sx={{ml: '-40px'}}>
                                {/* Отступ сверху у текста */}
                                <Typography variant="h4" sx={{fontWeight: 700, color: '#760073', mt: 5}}>
                                    {product.name}
                                </Typography>
                                <Typography variant="h5" sx={{fontWeight: 500, mt: 2, color: '#760073'}}>
                                    {formattedPrice}
                                </Typography>

                                {/* Первый выпадающий список */}
                                <FormControl fullWidth margin="normal" sx={{mt: 3, width: '88%'}}>
                                    <InputLabel id="color-label">Цвет</InputLabel>
                                    <Select
                                        labelId="color-label"
                                        value={selectedColor}
                                        onChange={(e) => setSelectedColor(e.target.value)}
                                        label="Цвет"
                                        disableScrollLock={true}
                                        sx={{
                                            '& .MuiSelect-select': {
                                                display: 'flex',
                                                alignItems: 'center',
                                            },
                                            backgroundColor: '#fff',
                                            borderRadius: '8px',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        }}
                                        input={<OutlinedInput label="Цвет"/>}>
                                        {product.colors.map((color) => (
                                            <MenuItem key={color} value={color}>
                                                <Box
                                                    sx={{
                                                        width: 16,
                                                        height: 16,
                                                        backgroundColor: colorHex[color] || '#FFFFFF',
                                                        borderRadius: '50%',
                                                        marginRight: 1,
                                                        border: '1px solid #ccc',
                                                    }}
                                                />
                                                {colorTranslations[color] || color}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth margin="normal" sx={{mt: 3, width: '88%'}}>
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
                                        input={<OutlinedInput label="Размер"/>}
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

                                {/* Счетчик */}
                                <Box sx={{mt: 4, display: 'flex', alignItems: 'center', width: '80%'}}>
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
                                    <Typography variant="body1" sx={{mx: 2, width: '60px', textAlign: 'center'}}>
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

                                {/* Кнопка "В корзину" */}
                                <Button
                                    variant="contained"
                                    startIcon={<AddShoppingCartIcon/>}
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
                                        onAddToCart({...product, selectedColor, selectedSize, quantity});
                                    }}
                                >
                                    В корзину
                                </Button>


                                {/* Описание */}
                                <Box sx={{mt: 4}}>
                                    <Typography variant="h6" sx={{fontWeight: 600, mb: 2, color: '#760073'}}>
                                        Описание
                                    </Typography>
                                    <Typography variant="body1" sx={{whiteSpace: 'pre-line', color: '#555'}}>
                                        {product.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <Typography variant="h6" sx={{fontWeight: 400}}>
                        Продукт не найден.
                    </Typography>
                )}
            </Fade>
        </Container>

    );
};

export default ProductDetailsPage;
