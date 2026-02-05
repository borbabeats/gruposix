'use client';

import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { CheckCircle, Home, ShoppingCart } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useUTM } from '../hooks/useUTM';

export default function PaginaDeObrigado() {
    const [orderNumber, setOrderNumber] = useState<string>('');
    const router = useRouter();
    const { addUTMToUrl } = useUTM();

    useEffect(() => {
        // Gerar número do pedido apenas no client-side
        const randomOrder = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        setTimeout(() => setOrderNumber(randomOrder), 0);
    }, []);

    return (
        <Container 
            maxWidth="md" 
            sx={{ 
                py: 8,
                px: { xs: 2, sm: 3 }
            }}
        >
            <Paper 
                elevation={3} 
                sx={{ 
                    p: { xs: 3, sm: 6 }, 
                    textAlign: 'center', 
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}
            >
                <Box sx={{ mb: 4 }}>
                    <CheckCircle 
                        sx={{ 
                            fontSize: 80, 
                            color: '#22c55e',
                            mb: 2
                        }} 
                    />
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        gutterBottom 
                        sx={{ 
                            fontWeight: 'bold',
                            color: '#1f2937'
                        }}
                    >
                        Pedido Confirmado!
                    </Typography>
                    <Typography 
                        variant="h6" 
                        color="text.secondary" 
                        sx={{ mb: 3 }}
                    >
                        Obrigado pela sua compra!
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            mb: 2,
                            maxWidth: 500,
                            mx: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        Seu pedido foi recebido com sucesso e está sendo processado. 
                        Você receberá um e-mail de confirmação em breve com os detalhes do seu pedido.
                    </Typography>
                    
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mb: 1 }}
                    >
                        <strong>Número do Pedido:</strong> #2024{orderNumber}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<ShoppingCart />}
                        onClick={() => router.push(addUTMToUrl('/'))}
                        sx={{ 
                            backgroundColor: '#22c55e',
                            '&:hover': { backgroundColor: '#16a34a' },
                            px: 4,
                            py: 1.5
                        }}
                    >
                        Continuar Comprando
                    </Button>
                    
                    <Button
                        variant="outlined"
                        size="large"
                        startIcon={<Home />}
                        onClick={() => router.push(addUTMToUrl('/'))}
                        sx={{ 
                            px: 4,
                            py: 1.5
                        }}
                    >
                        Página Inicial
                    </Button>
                </Box>

                <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #e5e7eb' }}>
                    <Typography variant="body2" color="text.secondary">
                        Precisa de ajuda? Entre em contato com nosso suporte
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                        suporte@gruposix.com.br | (11) 3000-0000
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}