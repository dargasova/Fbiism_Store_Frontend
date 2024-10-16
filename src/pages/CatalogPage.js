import React, {useState} from 'react';
import {
    Container, Grid, Typography, Select, MenuItem, FormControl,
    Box, styled
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ProductCard from '../components/ProductCard';

const primaryColor = '#760073';

const StyledFormControl = styled(FormControl)(({theme}) => ({
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

const CatalogPage = ({products}) => {
    const [sortDirection, setSortDirection] = useState('asc');

    if (!products || products.length === 0) {
        return <Typography variant="h6">Нет доступных товаров.</Typography>;
    }

    const sortedProducts = products.slice().sort((a, b) => {
        return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return (
        <Container maxWidth="lg" sx={{padding: '24px 0'}}>
            <Box sx={{marginBottom: 4, textAlign: 'left'}}>
                <Typography variant="h3" gutterBottom sx={{fontSize: '36px', fontWeight: 700}}>
                    Каталог
                </Typography>
                <Typography variant="subtitle1" sx={{fontSize: '16px', marginBottom: 2}}>
                    Хотим каждую из этих вещей! Себе, одногруппникам и друзьям.
                </Typography>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <StyledFormControl variant="outlined" size="small">
                        <Select
                            value={sortDirection}
                            onChange={(e) => setSortDirection(e.target.value)}
                            IconComponent={sortDirection === 'asc' ? ArrowDropUpIcon : ArrowDropDownIcon}
                            displayEmpty
                            inputProps={{'aria-label': 'Сортировка по цене'}}
                        >
                            <MenuItem value="asc">Цена по возрастанию</MenuItem>
                            <MenuItem value="desc">Цена по убыванию</MenuItem>
                        </Select>
                    </StyledFormControl>

                </Box>
            </Box>

            <Grid container spacing={4}>
                {sortedProducts.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CatalogPage;
