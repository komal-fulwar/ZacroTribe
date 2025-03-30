
import { motion } from 'framer-motion';
import AirdropAnnouncement from './airdrop/AirdropAnnouncement';
import AboutZacroSection from './airdrop/AboutZacroSection';
import ZacroFeatures from './airdrop/ZacroFeatures';
import { useIsMobile } from '@/hooks/use-mobile';

const AirdropSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="airdrop" className="py-20  relative overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 z-0">
        <div className="hero-grid"></div>
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-zacro-purple/20 rounded-full blur-[120px]"></div>
        </div>
      </div>
      
      <div className="relative z-10">
      <AboutZacroSection />
      <AirdropAnnouncement />
       
        
        <div className="container mx-auto px-4 mt-20">
          <ZacroFeatures />
        </div>
      </div>
    </section>
  );
};

export default AirdropSection;
