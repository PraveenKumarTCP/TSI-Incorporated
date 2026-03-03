import Hero from "./_components/Hero";
import FeatureCards from "./_components/FeatureCards";
import IntroSection from "./_components/IntroSection";
import MarketsSlider from "./_components/MarketsSlider";
import ProductCategories from "./_components/ProductCategories";
import SplitBanner from "./_components/SplitBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <FeatureCards />
      <IntroSection />
      <MarketsSlider />
      <ProductCategories />
      <SplitBanner />
    </div>
  );
}
