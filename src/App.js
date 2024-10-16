import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import AskQuestionDialog from './components/AskQuestionDialog';

const App = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [products, setProducts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);

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
                    index === existingItemIndex ? {...item, quantity: item.quantity + product.quantity} : item
                );
            } else {
                updatedCart = [...prevCart, product];
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/products');
                if (!response.ok) {
                    throw new Error('Ошибка загрузки продуктов');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Ошибка:', error);
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

    return (
        <Router>
            <Navbar cart={cart} onOpenCart={handleOpenCart} onOpenAskQuestion={handleOpenAskQuestion}/>
            <CartSidebar
                cart={cart}
                setCart={setCart}
                isOpen={isCartOpen}
                onClose={handleCloseCart}
            />
            <Routes>
                <Route path="/" element={<HomePage products={products} onAddToCart={handleAddToCart}/>}/>
                <Route path="/checkout" element={<Checkout cart={cart}/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage onAddToCart={handleAddToCart}/>}/>
                <Route path="/catalog" element={<CatalogPage products={products}/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>

            <AskQuestionDialog open={isAskQuestionOpen} onClose={handleCloseAskQuestion}/>
        </Router>
    );
};

export default App;
