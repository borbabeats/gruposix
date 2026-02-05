import Section from "../components/Section";
import { getThemeClasses } from "../utils/getThemeClasses";
import ProductsCard from "../components/ProductsCard";

interface Product {
    title: string;
    price: string;
    imgUrl: string;
}

interface SectionProductsProps {
    title: string;
    products: Product[];
    background?: string;
    color?: string;
}

export default function SectionProducts({ title, products, background, color }: SectionProductsProps) {
    return (
        <Section className={getThemeClasses(background, color)}>
            <h1>{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <ProductsCard key={index} {...product} />
                ))}
            </div>
        </Section>
    )
}