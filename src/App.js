// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AskQuestionPage from './pages/AskQuestionPage';
import Checkout from './components/Checkout'; // Импортируйте Checkout
import Navbar from './components/Navbar';

const App = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const handleAddToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:8080/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <Router>
            <Navbar cart={cart} />
            <Routes>
                <Route path="/" element={<HomePage products={products} onAddToCart={handleAddToCart} />} />
                <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
                <Route path="/checkout" element={<Checkout />} /> {/* Добавляем маршрут для Checkout */}
                <Route path="/product/:id" element={<ProductDetailsPage products={products} onAddToCart={handleAddToCart} />} />
                <Route path="/catalog" element={<CatalogPage products={products} onAddToCart={handleAddToCart} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/ask-question" element={<AskQuestionPage />} />
            </Routes>
        </Router>
    );
};

export default App;
