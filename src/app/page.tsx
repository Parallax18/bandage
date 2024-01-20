import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth={"lg"}>
      <Hero />
      <FeaturedProducts />
    </Container>
  );
}
