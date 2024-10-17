// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CatalogPage from './pages/CatalogPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import AskQuestionDialog from './components/AskQuestionDialog';
import Footer from './components/Footer';
import { Box, Snackbar, Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Импортируем иконку галочки

const App = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);

    const [notification, setNotification] = useState({ open: false, message: '' });

    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item =>
                item.id === product.id &&
                item.selectedColor === product.selectedColor &&
                item.selectedSize === product.selectedSize
            );

            let updatedCart;

            if (existingItemIndex !== -1) {
                updatedCart = prevCart.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            } else {
                updatedCart = [...prevCart, product];
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));

            // Уведомление при добавлении товара
            setNotification({ open: true, message: `${product.name} добавлен в корзину!` });

            return updatedCart;
        });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('http://localhost:8080/products');
                if (!response.ok) {
                    throw new Error('Ошибка загрузки продуктов');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Ошибка:', error);
                setError('Не удалось загрузить товары. Пожалуйста, попробуйте позже.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleOpenCart = () => {
        setIsCartOpen(true);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    const handleOpenAskQuestion = () => {
        setIsAskQuestionOpen(true);
    };

    const handleCloseAskQuestion = () => {
        setIsAskQuestionOpen(false);
    };

    const handleCloseNotification = () => {
        setNotification({ ...notification, open: false });
    };

    return (
        <Router>
            <Navbar cart={cart} onOpenCart={handleOpenCart} onOpenAskQuestion={handleOpenAskQuestion} />
            <CartSidebar
                cart={cart}
                setCart={setCart}
                isOpen={isCartOpen}
                onClose={handleCloseCart}
            />
            <Box sx={{ minHeight: '80vh', paddingBottom: '80px' }}>
                <Routes>
                    <Route path="/" element={<HomePage products={products} onAddToCart={handleAddToCart} />} />
                    <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
                    <Route path="/product/:id" element={<ProductDetailsPage onAddToCart={handleAddToCart} />} />
                    <Route path="/catalog" element={<CatalogPage products={products} loading={loading} error={error} />} />
                </Routes>
            </Box>
            <AskQuestionDialog open={isAskQuestionOpen} onClose={handleCloseAskQuestion} />
            <Footer />

            {/* Уведомление */}
            <Snackbar
                open={notification.open}
                autoHideDuration={3000}
                onClose={handleCloseNotification}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleCloseNotification}
                    severity="success"
                    sx={{
                        width: '100%',
                        backgroundColor: '#760073',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        padding: '16px',
                    }}
                    icon={<CheckCircleIcon sx={{ color: '#ffffff' }} />} // Галочка теперь белая
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </Router>
    );
};

export default App;
