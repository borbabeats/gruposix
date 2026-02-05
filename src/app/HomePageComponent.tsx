'use client'
import SectionHeadline from "./sections/SectionHeadline";
import vslpage from "@/app/content/vslpage.json";
import SectionTestimonials from "./sections/SectionTestimonials";
import SectionProducts from "./sections/SectionProducts";
import UTMCapture from "./components/UTMCapture";
//import { useUTM } from "./hooks/useUTM";

interface VslPage {
  headline: {
    title: string;
    subtitle: string;
    background: string;
    color: string;
    ctatext: string;
  };
}

interface Testimonial {
  name: string;
  text: string;
  imgUrl: string;
}

interface Testimonials {
  title: string;
  testimonial1: Testimonial;
  testimonial2: Testimonial;
  testimonial3: Testimonial;
  background: string;
  color: string;
}

interface Product {
  title: string;
  price: string;
  partialPrice: string;
  ctaText: string;
  imgUrl: string;
  checkoutUrl: string;
}

interface Products {
  title: string;
  product1: Product;
  product2: Product;
  product3: Product;
}

const typedVslpage = vslpage as unknown as VslPage & { testimonials: Testimonials };
const { testimonials } = vslpage as unknown as { testimonials: Testimonials };
const { products } = vslpage as unknown as { products: Products };

const testimonialsList: Testimonial[] = [
  testimonials.testimonial1,
  testimonials.testimonial2,
  testimonials.testimonial3,
];

const productsList: Product[] = [
  {
    ...products.product1,
    checkoutUrl: '/checkout-page'
  },
  {
    ...products.product2,
    checkoutUrl: '/checkout-page'
  },
  {
    ...products.product3,
    checkoutUrl: '/checkout-page'
  },
];

export default function Home() {
  return (
    <>
    <UTMCapture />
    <SectionHeadline
     title={typedVslpage.headline.title}
     subtitle={typedVslpage.headline.subtitle}
     vslilink={process.env.NEXT_PUBLIC_VSL_LINK}
     color="primary"
     background="primary"
     ctatext={typedVslpage.headline.ctatext}
    />
    <SectionProducts
     title={products.title}
     products={productsList}
     background="secondary"
     color="primary"
    />
    <SectionTestimonials
     title={testimonials.title}
     testimonials={testimonialsList}
     background="primary"
     color="primary"
     />
    </>
  );
}
