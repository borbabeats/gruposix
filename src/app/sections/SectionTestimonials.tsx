import Section from "../components/Section";
import { getThemeClasses } from "@/app/utils/getThemeClasses";
import TestimonialCard from "../components/TestimonialCard";

interface Testimonial {
    name: string;
    text: string;
    imgUrl: string;
}

interface SectionTestimonialsProps {
    title: string;
    testimonials: Testimonial[];
    background?: string;
    color?: string;
}

export default function SectionTestimonial({ title, testimonials, background, color }: SectionTestimonialsProps) {

    return (
        <Section className={`${getThemeClasses(background, color)} py-25`}>
            <h2 className="font-bold text-center mb-20">{title}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </Section>
    );
}