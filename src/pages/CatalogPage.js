import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

const CatalogPage = ({ products }) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Каталог
            </Typography>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} hideActions={true} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CatalogPage;
