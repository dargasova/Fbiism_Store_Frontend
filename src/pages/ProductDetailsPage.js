import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ProductDetailsPage = ({ onAddToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:8080/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setSelectedColor(data.colors[0]); // Устанавливаем первый цвет по умолчанию
            setSelectedSize(data.sizes[0]); // Устанавливаем первый размер по умолчанию
            setLoading(false);
        };

        fetchProduct();
    }, [id]);

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change)); // Не допускаем количество меньше 1
    };

    if (loading) return <Typography variant="h6">Загрузка...</Typography>;

    return (
        <Container>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">${product.price}</Typography>

            {/* Выбор цвета */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Цвет</InputLabel>
                <Select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    {product.colors.map((color) => (
                        <MenuItem key={color} value={color}>
                            {color}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Выбор размера */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Размер</InputLabel>
                <Select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    {product.sizes.map((size) => (
                        <MenuItem key={size} value={size}>
                            {size}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Выбор количества */}
            <Typography>Количество</Typography>
            <Button onClick={() => handleQuantityChange(-1)}>-</Button>
            <Typography>{quantity}</Typography>
            <Button onClick={() => handleQuantityChange(1)}>+</Button>

            {/* Добавление в корзину */}
            <Button
                variant="contained"
                color="primary"
                onClick={() => onAddToCart({ ...product, selectedColor, selectedSize, quantity })}
            >
                В корзину
            </Button>
        </Container>
    );
};

export default ProductDetailsPage;
