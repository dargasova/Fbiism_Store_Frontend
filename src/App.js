import React, {useState, useEffect, useCallback} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CatalogPage from './pages/CatalogPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import AskQuestionDialog from './components/AskQuestionDialog';
import Footer from './components/Footer';
import {Box, Snackbar, Alert} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import smoothscroll from 'smoothscroll-polyfill';

const App = () => {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);
    const [notification, setNotification] = useState({open: false, message: ''});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://localhost:8443/products');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке продуктов');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError('Не удалось загрузить продукты. Попробуйте позже.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = useCallback((product) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (item) =>
                    item.id === product.id &&
                    item.selectedColor === product.selectedColor &&
                    item.selectedSize === product.selectedSize
            );

            let updatedCart;

            if (existingItemIndex !== -1) {
                updatedCart = prevCart.map((item, index) =>
                    index === existingItemIndex ? {...item, quantity: item.quantity + product.quantity} : item
                );
            } else {
                updatedCart = [...prevCart, product];
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));

            setNotification({open: true, message: `${product.name} добавлено в корзину!`});

            return updatedCart;
        });
    }, []);

    const handleCloseNotification = useCallback(() => {
        setNotification((prev) => ({...prev, open: false}));
    }, []);

    const handleOpenCart = useCallback(() => {
        setIsCartOpen(true);
    }, []);

    const handleCloseCart = useCallback(() => {
        setIsCartOpen(false);
    }, []);

    const handleOpenAskQuestion = useCallback(() => {
        setIsAskQuestionOpen(true);
    }, []);

    const handleCloseAskQuestion = useCallback(() => {
        setIsAskQuestionOpen(false);
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
        localStorage.removeItem('cart');
    }, []);

    const location = useLocation();
    const isCheckoutPage = location.pathname === '/checkout';

    return (
        <>
            <Navbar
                cart={cart}
                onOpenCart={handleOpenCart}
                onOpenAskQuestion={handleOpenAskQuestion}
            />
            <CartSidebar
                cart={cart}
                setCart={setCart}
                isOpen={isCartOpen}
                onClose={handleCloseCart}
            />
            <Box sx={{minHeight: '80vh', paddingBottom: isCheckoutPage ? 0 : '80px'}}>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage products={products} onAddToCart={handleAddToCart}/>}
                    />
                    <Route
                        path="/checkout"
                        element={<CheckoutPage cart={cart} clearCart={clearCart}/>}
                    />
                    <Route
                        path="/payment"
                        element={<PaymentPage/>}
                    />
                    <Route
                        path="/product/:id"
                        element={<ProductDetailsPage onAddToCart={handleAddToCart}/>}
                    />
                    <Route
                        path="/catalog"
                        element={
                            <CatalogPage
                                products={products}
                                loading={loading}
                                error={error}
                            />
                        }
                    />
                </Routes>
            </Box>
            <AskQuestionDialog
                open={isAskQuestionOpen}
                onClose={handleCloseAskQuestion}
            />
            {location.pathname === '/' && <Footer/>}
            <Snackbar
                open={notification.open}
                autoHideDuration={3000}
                onClose={handleCloseNotification}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
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
                    icon={<CheckCircleIcon sx={{color: '#ffffff'}}/>}
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default App;
