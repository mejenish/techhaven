import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import SaleSection from "@/components/SaleSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import OfferShowupSection from "@/components/OfferShowupSection";
import { mockProducts } from "@/data/products";

export default function HomePage() {
  const featuredProducts = mockProducts.filter(p => p.featured);
  const saleProducts = mockProducts.filter(p => p.onSale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <OfferShowupSection />
        <FeaturedProductsSection products={featuredProducts} title="Top Picks For You"/>
        <SaleSection products={saleProducts} />
      </main>
      <Footer />
    </div>
  );
}
