import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Импортируйте локальное изображение с правильным относительным путем
import welcomeImage from '../images/6c810817c014cad6ad23e5e41feee261.jpg';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleCatalogClick = () => {
        navigate('/catalog');
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '20px' }}>
            {loading ? (
                <Typography variant="h6">Загрузка...</Typography>
            ) : (
                <>
                    <img 
                        src={welcomeImage} 
                        alt="Приветствие в магазине ФБИУКС" 
                        style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }} 
                    />
                    <Typography variant="h4" gutterBottom>
                        Добро пожаловать в магазин мерча ФБИУКС!
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        onClick={handleCatalogClick} 
                        style={{ marginTop: '20px' }}
                    >
                        Каталог
                    </Button>
                </>
            )}
        </Container>
    );
};

export default HomePage;
