import React, { useState, useMemo } from 'react';
import {
    Container,
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    Box,
    styled,
    CircularProgress,
    Fade,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ProductCard from '../components/ProductCard';
import PropTypes from 'prop-types';

const primaryColor = '#760073';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    minWidth: 200,
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        '& fieldset': {
            borderColor: primaryColor,
        },
        '&:hover fieldset': {
            borderColor: primaryColor,
        },
        '&.Mui-focused fieldset': {
            borderColor: primaryColor,
        },
    },
    '& .MuiSelect-select': {
        padding: '10px 32px 10px 14px',
        color: primaryColor,
    },
    '& .MuiSelect-icon': {
        color: primaryColor,
    },
}));

const CatalogPage = ({ products, loading = false, error = '' }) => {
    const [sortDirection, setSortDirection] = useState('asc');

    const sortedProducts = useMemo(() => {
        return [...products].sort((a, b) => {
            return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }, [sortDirection, products]);

    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '30px 0 24px 0',
                backgroundColor: '#fff',
            }}
        >
            <Box
                sx={{
                    marginBottom: 4,
                    textAlign: 'left',
                    marginTop: '20px',
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '38px', md: '46px' },
                        fontWeight: 700,
                        color: primaryColor,
                    }}
                >
                    Каталог
                </Typography>

                <Typography variant="subtitle1" sx={{ fontSize: '20px', marginBottom: 4 }}>
                    Хотим каждую из этих вещей! Себе, одногруппникам и друзьям.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <StyledFormControl variant="outlined" size="small">
                        <Select
                            value={sortDirection}
                            onChange={(e) => setSortDirection(e.target.value)}
                            IconComponent={sortDirection === 'asc' ? ArrowDropUpIcon : ArrowDropDownIcon}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Сортировка по цене' }}
                        >
                            <MenuItem value="asc">Цена по возрастанию</MenuItem>
                            <MenuItem value="desc">Цена по убыванию</MenuItem>
                        </Select>
                    </StyledFormControl>
                </Box>
            </Box>

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
                    <CircularProgress color="primary" />
                </Box>
            )}

            {error && (
                <Typography variant="h6" color="error" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    {error}
                </Typography>
            )}

            {!loading && !error && products.length === 0 && (
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
                    Нет доступных товаров.
                </Typography>
            )}

            <Fade in={!loading && !error && products.length > 0} timeout={500}>
                <Grid container spacing={4}>
                    {sortedProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Fade>
        </Container>
    );

};

CatalogPage.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
};

export default CatalogPage;
