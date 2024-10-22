// ProductCard.jsx
import React, { useMemo } from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    Box,
    CardActionArea,
    Badge,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';

const primaryColor = '#760073';

const ProductCard = React.memo(({ product }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/product/${product.id}`);
    };

    const formattedPrice = useMemo(() => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(product.price);
    }, [product.price]);

    const mainImage = useMemo(() => {
        if (Number(product.id) === 1) {
            return product.images[product.images.length - 1]?.url;
        }
        return product.selectedColor
            ? product.images.find((img) => img.color === product.selectedColor)?.url || product.images[0]?.url
            : product.images[0]?.url;
    }, [product.id, product.images, product.selectedColor]);

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
            {product.isFavorite && (
                <Badge
                    badgeContent={<FavoriteIcon color="error" />}
                    sx={{ position: 'absolute', top: 16, right: 16 }}
                />
            )}

            <CardActionArea onClick={handleViewDetails} sx={{ flexGrow: 1 }}>
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
                <CardContent sx={{ padding: '16px 12px 16px 10px', textAlign: 'left' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            fontSize: '20px',
                            marginBottom: '8px',
                            color: primaryColor,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography
                        color="#282828"
                        sx={{ fontWeight: 560, fontSize: '20px' }}
                    >
                        {formattedPrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string.isRequired,
                color: PropTypes.string,
            })
        ).isRequired,
        selectedColor: PropTypes.string,
        isFavorite: PropTypes.bool,
    }).isRequired,
};

export default ProductCard;
