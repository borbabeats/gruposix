'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Container,
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    Stepper,
    Step,
    StepLabel,
    Card,
    CardContent,
    Divider,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import {
    ShoppingCart,
    CreditCard,
    LocalShipping,
    Person,
    Email,
    Phone,
    LocationOn,
    Remove,
    Add,
    Delete
} from '@mui/icons-material';
import { useUTM } from '../hooks/useUTM';

const steps = ['Informações Pessoais', 'Endereço de Entrega', 'Pagamento', 'Confirmação'];

export default function CheckoutPageComponent() {
    const router = useRouter();
    const { addUTMToUrl } = useUTM();
    const [activeStep, setActiveStep] = useState(0);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'ThermoFisio', price: 199.90, quantity: 1 },
        { id: 2, name: 'TermaBurn', price: 184.90, quantity: 1 }
    ]);

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            const obrigadoUrlWithUTM = addUTMToUrl('/pagina-de-obrigado');
            router.push(obrigadoUrlWithUTM);
        } else {
            setActiveStep((prev) => prev + 1);
        }
    };
    const handleBack = () => setActiveStep((prev) => prev - 1);

    const updateQuantity = (id: number, change: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 15.00;
    const total = subtotal + shipping;

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            fullWidth
                            label="Nome Completo"
                            variant="outlined"
                            InputProps={{ startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} /> }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            InputProps={{ startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} /> }}
                        />
                        <TextField
                            fullWidth
                            label="Telefone"
                            variant="outlined"
                            InputProps={{ startAdornment: <Phone sx={{ mr: 1, color: 'action.active' }} /> }}
                        />
                        <TextField
                            fullWidth
                            label="CPF"
                            variant="outlined"
                        />
                    </Box>
                );
            case 1:
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            fullWidth
                            label="CEP"
                            variant="outlined"
                            InputProps={{ startAdornment: <LocationOn sx={{ mr: 1, color: 'action.active' }} /> }}
                        />
                        <TextField
                            fullWidth
                            label="Endereço"
                            variant="outlined"
                        />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                                <TextField fullWidth label="Número" variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField fullWidth label="Complemento" variant="outlined" />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            label="Bairro"
                            variant="outlined"
                        />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                                <TextField fullWidth label="Cidade" variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Estado</InputLabel>
                                    <Select label="Estado">
                                        <MenuItem value="SP">São Paulo</MenuItem>
                                        <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                                        <MenuItem value="MG">Minas Gerais</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                );
            case 2:
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            fullWidth
                            label="Número do Cartão"
                            variant="outlined"
                            InputProps={{ startAdornment: <CreditCard sx={{ mr: 1, color: 'action.active' }} /> }}
                        />
                        <TextField
                            fullWidth
                            label="Nome no Cartão"
                            variant="outlined"
                        />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6 }}>
                                <TextField fullWidth label="Validade" placeholder="MM/AA" variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <TextField fullWidth label="CVV" variant="outlined" />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            label="Parcelas"
                            select
                            variant="outlined"
                            defaultValue="1"
                        >
                            <MenuItem value="1">1x de R$ {total.toFixed(2)}</MenuItem>
                            <MenuItem value="2">2x de R$ {(total / 2).toFixed(2)}</MenuItem>
                            <MenuItem value="3">3x de R$ {(total / 3).toFixed(2)}</MenuItem>
                        </TextField>
                    </Box>
                );
            case 3:
                return (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Resumo do Pedido
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Verifique suas informações antes de finalizar
                        </Typography>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                <ShoppingCart sx={{ mr: 2, verticalAlign: 'middle' }} />
                Checkout
            </Typography>

            <Box sx={{ mb: 4 }}>
                {/* Desktop/Tablet - Stepper horizontal */}
                <Stepper 
                    activeStep={activeStep} 
                    orientation="horizontal"
                    sx={{ 
                        display: { xs: 'none', sm: 'flex' }
                    }}
                >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                
                {/* Mobile - Stepper vertical customizado */}
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    {steps.map((label, index) => (
                        <Box 
                            key={label} 
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: 2,
                                opacity: index <= activeStep ? 1 : 0.5
                            }}
                        >
                            <Box 
                                sx={{ 
                                    width: 32, 
                                    height: 32, 
                                    borderRadius: '50%', 
                                    backgroundColor: index <= activeStep ? '#22c55e' : '#e5e7eb',
                                    color: index <= activeStep ? 'white' : '#6b7280',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    mr: 2
                                }}
                            >
                                {index + 1}
                            </Box>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    fontWeight: index === activeStep ? 'bold' : 'normal',
                                    color: index === activeStep ? '#22c55e' : 'inherit'
                                }}
                            >
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper sx={{ p: 4, borderRadius: 3 }}>
                        {renderStepContent(activeStep)}
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="outlined"
                            >
                                Voltar
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ backgroundColor: '#22c55e', '&:hover': { backgroundColor: '#16a34a' } }}
                            >
                                {activeStep === steps.length - 1 ? 'Finalizar Pedido' : 'Próximo'}
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ borderRadius: 3, position: 'sticky', top: 20 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Resumo do Pedido
                            </Typography>
                            
                            <Box sx={{ mb: 3 }}>
                                {cartItems.map((item) => (
                                    <Box key={item.id} sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                {item.name}
                                            </Typography>
                                            <IconButton size="small" onClick={() => removeItem(item.id)}>
                                                <Delete fontSize="small" />
                                            </IconButton>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                >
                                                    <Remove fontSize="small" />
                                                </IconButton>
                                                <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                >
                                                    <Add fontSize="small" />
                                                </IconButton>
                                            </Box>
                                            <Typography variant="body2">
                                                R$ {(item.price * item.quantity).toFixed(2)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Divider sx={{ mb: 2 }} />

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2">Subtotal:</Typography>
                                    <Typography variant="body2">R$ {subtotal.toFixed(2)}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2">
                                        <LocalShipping sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                                        Frete:
                                    </Typography>
                                    <Typography variant="body2">R$ {shipping.toFixed(2)}</Typography>
                                </Box>
                                <Divider sx={{ my: 1 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total:</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary' }}>
                                        R$ {total.toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}