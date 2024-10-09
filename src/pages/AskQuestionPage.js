// src/pages/AskQuestionPage.js
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const AskQuestionPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно добавить логику отправки формы
        alert("Сообщение отправлено!");
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Задать вопрос
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Ваш вопрос"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Отправить
                </Button>
            </form>
        </Container>
    );
};

export default AskQuestionPage;
