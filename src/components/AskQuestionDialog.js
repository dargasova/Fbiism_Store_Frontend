import React, { useState } from 'react';
import { TextField, Button, Box, Dialog, DialogContent, DialogTitle, DialogActions, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const theme = createTheme({
    palette: {
        primary: {
            main: '#760073', // Корпоративный цвет для фокуса
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    shrink: true, // Установка для поднятия лейбла
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#760073', // Цвет заголовка при фокусе
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused fieldset': {
                        borderColor: '#760073', // Цвет рамки при фокусе
                    },
                },
            },
        },
    },
});

const AskQuestionDialog = ({ open, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [error, setError] = useState('');
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !question) {
            setError('Пожалуйста, заполните все поля.');
            return;
        }

        const formData = { name, email, question };

        try {
            const response = await fetch('http://localhost:5000/send-question', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setOpenSuccessDialog(true);
                setName('');
                setEmail('');
                setQuestion('');
                setError('');
            } else {
                setError('Произошла ошибка. Попробуйте снова.');
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            setError('Произошла ошибка. Попробуйте снова.');
        }
    };

    const handleCloseSuccessDialog = () => {
        setOpenSuccessDialog(false);
        onClose();
    };

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    style: {
                        borderRadius: '15px',
                        padding: '20px',
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        fontSize: { xs: '38px', md: '46px' },
                        color: '#760073',
                    }}
                >
                    Задать вопрос
                </DialogTitle>

                <DialogContent>
                    <Typography
                        variant="body1"
                        style={{
                            textAlign: 'center',
                            fontWeight: 400,
                            marginBottom: '20px',
                            fontSize: '20px',
                        }}
                    >
                        Ваше обращение будет отправлено на нашу почту, и мы непременно свяжемся с вами в ближайшее время!
                    </Typography>

                    {error && (
                        <Box
                            sx={{
                                backgroundColor: '#ffcccc',
                                padding: '10px',
                                marginBottom: '20px',
                                borderRadius: '4px',
                            }}
                        >
                            <Typography
                                color="error"
                                style={{
                                    fontWeight: 400,
                                }}
                            >
                                {error}
                            </Typography>
                        </Box>
                    )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Имя"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <TextField
                            label="Ваш вопрос"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: '#760073',
                                color: 'white',
                                fontWeight: 500,
                                marginTop: '20px',
                                padding: '10px 0',
                                borderRadius: '30px',
                                fontSize: { xs: '8px', md: '16px' },
                                '&:hover': {
                                    backgroundColor: '#59005a',
                                },
                            }}
                        >
                            Отправить
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog
                open={openSuccessDialog}
                onClose={handleCloseSuccessDialog}
                PaperProps={{
                    style: {
                        borderRadius: '15px',
                        paddingBottom: '20px',
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#760073',
                        color: 'white',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CheckCircleOutlineIcon sx={{ fontSize: 40, mr: 1 }} />
                    <DialogTitle
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            textAlign: 'center',
                        }}
                    >
                        Сообщение отправлено!
                    </DialogTitle>
                </Box>

                <DialogContent>
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 400,
                            mb: 2,
                        }}
                    >
                        Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
                    </Typography>
                </DialogContent>

                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button
                        onClick={handleCloseSuccessDialog}
                        variant="contained"
                        sx={{
                            backgroundColor: '#760073',
                            color: 'white',
                            fontWeight: 500,
                            textTransform: 'none',
                            padding: '8px 30px',
                            borderRadius: '30px',
                            '&:hover': {
                                backgroundColor: '#59005a',
                            },
                        }}
                    >
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default AskQuestionDialog;
