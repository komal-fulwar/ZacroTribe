
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedInSection from '../components/FeaturedInSection';
import AssetsSection from '../components/AssetsSection';
import MissionSection from '../components/MissionSection';
import BenefitsSection from '../components/BenefitsSection';
import EcosystemSection from '../components/EcosystemSection';
import HowToBuySection from '../components/HowToBuySection';
import TokenomicsSection from '../components/TokenomicsSection';
import RoadmapSection from '../components/RoadmapSection';
import CommunitySection from '../components/CommunitySection';
import AirdropSection from '../components/AirdropSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll animation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="bg-zacro-dark min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <AirdropSection />
      <FeaturedInSection />
      <HowToBuySection />
      <TokenomicsSection />
      <BenefitsSection />
      <EcosystemSection />
      <AssetsSection />
      <MissionSection />
      
      
      
     
     
      <RoadmapSection />
      <FAQSection />
      <CommunitySection />
      <Footer />
    </main>
  );
};

export default Index;
