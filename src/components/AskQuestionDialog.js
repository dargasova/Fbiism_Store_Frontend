import React, {useState} from 'react';
import {Typography, TextField, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AskQuestionDialog = ({open, onClose}) => {
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

        const formData = {name, email, question};

        try {
            const response = await fetch('http://localhost:5000/send-question', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
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
        <>
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
                    style={{
                        fontFamily: 'StyreneA, Arial, sans-serif',
                        fontWeight: 700,
                        textAlign: 'center',
                    }}
                >
                    Задать вопрос
                </DialogTitle>
                <DialogContent>
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
                                    fontFamily: 'StyreneA, Arial, sans-serif',
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
                            InputProps={{
                                style: {
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    borderRadius: '8px',
                                },
                            }}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                style: {
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    borderRadius: '8px',
                                },
                            }}
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
                            InputProps={{
                                style: {
                                    fontFamily: 'StyreneA, Arial, sans-serif',
                                    fontWeight: 400,
                                    borderRadius: '8px',
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: '#760073',
                                color: 'white',
                                fontFamily: 'StyreneA, Arial, sans-serif',
                                fontWeight: 500,
                                marginTop: '20px',
                                padding: '10px 0',
                                borderRadius: '30px',
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
                    <CheckCircleOutlineIcon style={{fontSize: '40px', marginRight: '10px'}}/>
                    <DialogTitle
                        style={{
                            color: 'white',
                            fontWeight: 700,
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            textAlign: 'center',
                        }}
                    >
                        Сообщение отправлено!
                    </DialogTitle>
                </Box>
                <DialogContent>
                    <Typography
                        variant="body1"
                        style={{
                            textAlign: 'center',
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            fontWeight: 400,
                            marginBottom: '20px',
                        }}
                    >
                        Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
                    </Typography>
                </DialogContent>
                <DialogActions style={{justifyContent: 'center'}}>
                    <Button
                        onClick={handleCloseSuccessDialog}
                        variant="contained"
                        style={{
                            backgroundColor: '#760073',
                            color: 'white',
                            fontFamily: 'StyreneA, Arial, sans-serif',
                            fontWeight: 500,
                            textTransform: 'none',
                            padding: '8px 30px',
                            borderRadius: '30px',
                        }}
                    >
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AskQuestionDialog;
