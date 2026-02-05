import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export interface Testimonial {
    name: string;
    text: string;
    imgUrl: string;
}

export default function TestimonialCard({ name, text, imgUrl }: Testimonial) {
    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
                <div className="flex items-center mb-4">
                    <Avatar 
                        src={imgUrl}
                        alt={name}
                        sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Typography variant="h6" component="h4" fontWeight="bold">
                        {name}
                    </Typography>
                </div>
                <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    "{text}"
                </Typography>
            </CardContent>
        </Card>
    );
}