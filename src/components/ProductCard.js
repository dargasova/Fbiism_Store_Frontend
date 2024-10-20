// ProductCard.jsx
import React from 'react';
import {Card, CardContent, Typography, CardMedia, Box, CardActionArea, Badge} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({product}) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/product/${product.id}`);
    };

    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(product.price);

    let mainImage;

    if (product.id === 1) {
        mainImage = product.images[product.images.length - 1]?.url;
    } else {
        mainImage = product.selectedColor
            ? product.images.find(img => img.color === product.selectedColor)?.url || product.images[0]?.url
            : product.images[0]?.url;
    }

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 6,
                },
                position: 'relative',
                backgroundColor: '#ffffff',
            }}
            elevation={3}
        >
            {/* Иконка избранного */}
            {product.isFavorite && (
                <Badge
                    badgeContent={<FavoriteIcon color="error"/>}
                    sx={{position: 'absolute', top: 16, right: 16}}
                />
            )}

            <CardActionArea onClick={handleViewDetails} sx={{flexGrow: 1}}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        paddingTop: '100%',
                        overflow: 'hidden',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    {mainImage ? (
                        <CardMedia
                            component="img"
                            alt={product.name}
                            image={mainImage}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        />
                    ) : (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f0f0f0',
                            }}
                        >
                            <Typography variant="h6" color="textSecondary">
                                Нет изображения
                            </Typography>
                        </Box>
                    )}
                </Box>
                <CardContent sx={{padding: '16px 12px', paddingLeft: '10px', textAlign: 'left'}}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            fontSize: '20px',
                            marginBottom: '8px',
                            color: '#760073',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            paddingLeft: '10px', // Добавлен отступ для названия товара
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography color='#282828' sx={{fontWeight: 560, fontSize: '20px', paddingLeft: '10px'}}>
                        {formattedPrice}
                    </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
