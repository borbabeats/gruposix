import Link from "next/link";
import Button from '@mui/material/Button';

interface CtaButtonProps {
    ctaText: string;
}

export default function CtaButton({ctaText}: CtaButtonProps){
    return(
        <div className="flex justify-center mt-8">
            <Link href={process.env.NEXT_PUBLIC_CHECKOUT_LINK || ''}>
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#22c55e',
                        px: 3,
                        py: 1.5,
                        fontWeight: 'bold',
                        boxShadow: 3,
                        '&:hover': { 
                            backgroundColor: '#16a34a',
                            boxShadow: 6,
                            transform: 'scale(1.05)'
                        },
                        transition: 'all 0.2s ease-in-out'
                    }}
                >
                    {ctaText}
                </Button>
            </Link>
        </div>
    )
}