import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, hideActions }) => {
    const navigate = useNavigate(); // Хук для навигации

    const handleViewDetails = () => {
        navigate(`/product/${product.id}`); // Навигация к деталям товара
    };

    return (
        <Card onClick={handleViewDetails} style={{ cursor: 'pointer' }}>
            <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography color="textSecondary">${product.price}</Typography>
                <Typography>{product.description}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
