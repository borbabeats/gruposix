import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CtaButton from './CtaButton';
import Image from 'next/image';
import { useUTM } from '../hooks/useUTM';

interface ProductsCardProps {
    title: string;
    price: string;
    partialPrice: string;
    ctaText: string;
    imgUrl: string;
}

export default function ProductsCard({ title, price, partialPrice, ctaText, imgUrl }: ProductsCardProps) {
    const { addUTMToUrl } = useUTM();
    
    // Adicionar UTMs ao URL de checkout
    const checkoutUrlWithUTM = addUTMToUrl('/checkout-page');
    
    return (
        <Card 
            sx={{ 
                maxWidth: 335,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                padding: 2,
                boxShadow: 3,
                backgroundColor: 'var(--color-primary-900)',
                border: '3px solid',
                borderColor: 'var(--color-primary-500)',
                '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease-in-out'
                }
            }}
        >
            <Box sx={{ width: '100%', height: 550, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    src={imgUrl}
                    alt={title}
                    width={345}
                    height={550}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        backgroundColor: '#f3f4f6' // Placeholder para evitar shift
                    }}
                />
            </Box>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={{ 
                        fontWeight: 'bold',
                        color: '#f8fafc',
                        textAlign: 'center',
                        minHeight: '3rem'
                    }}
                >
                    {title}
                </Typography>
                
                <Box sx={{ flexGrow: 1 }} />
                
                <Typography 
                    variant="h5" 
                    sx={{ 
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#f8fafc'
                    }}
                >
                    {price}
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#f8fafc' }}>
                        {partialPrice}
                    </Typography>
                </Typography>
                
                <CtaButton ctaText={ctaText} checkoutUrl={checkoutUrlWithUTM} />
            </CardContent>
        </Card>
    )
}