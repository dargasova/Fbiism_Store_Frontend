import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ cart }) => {
  // Считаем общее количество товаров в корзине
  const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            FBIISM Store
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Главная
          </Button>
          <Button color="inherit" component={Link} to="/about">
            О нас
          </Button>
          <Button color="inherit" component={Link} to="/catalog">
            Каталог
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Контакты
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Корзина ({totalQuantity})
          </Button>
          <Button color="inherit" component={Link} to="/ask-question">
            Задать вопрос
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
