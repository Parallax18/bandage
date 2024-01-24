import CTA from "@/components/home/CTA";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedServices from "@/components/home/FeaturedServices";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Hero />
        <FeaturedProducts />
        <FeaturedServices />
        <FeaturedPosts />
        <Testimonials />
      </Container>
      <CTA />
    </>
  );
}
