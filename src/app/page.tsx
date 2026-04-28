import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppPreview from '@/components/AppPreview';
import HowItWorks from '@/components/HowItWorks';
import HealthBenefits from '@/components/HealthBenefits';
import Testimonials from '@/components/Testimonials';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import Protection from '@/components/Protection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AppPreview />
      <HowItWorks />
      <HealthBenefits />
      <Testimonials />
      <Comparison />
      <Pricing />
      <Protection />
      <FAQ />
      <Footer />
    </div>
  );
}
