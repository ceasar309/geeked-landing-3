import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import BrandStatement from "@/components/BrandStatement";
import Lookbook from "@/components/Lookbook";
import ProductHighlights from "@/components/ProductHighlights";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Hero />
      <FeaturedCollection />
      <BrandStatement />
      <Lookbook />
      <ProductHighlights />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
