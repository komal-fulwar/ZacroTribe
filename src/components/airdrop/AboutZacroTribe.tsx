
import { motion } from 'framer-motion';
import SplineScene from '../SplineScene';
import SectionHeader from '../shared/SectionHeader';
import FeatureTag from '../shared/FeatureTag';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutZacroTribe = () => {
  const isMobile = useIsMobile();
  const features = [
    { color: "green", label: "Community Driven" },
    { color: "blue", label: "Blockchain Powered" },
    { color: "purple", label: "Reward System" }
  ];

  return (
    <div className="mt-24">
      <SectionHeader 
        badge="ABOUT US"
        title="About"
        titleHighlight="Zacro Tribe"
        description="A pioneering, cutting-edge decentralized financial news platform transforming how you stay informed"
      />
      
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-3'} gap-8`}>
        <AboutContent features={features} />
        
        <AboutVisual />
      </div>
    </div>
  );
};

const AboutContent = ({ features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="col-span-2"
    >
      <div className="space-y-6 text-white">
        <p className="text-lg md:text-xl leading-relaxed">
          ZacroTribe is a pioneering, cutting-edge decentralized financial news 
          platform that is transforming how you stay informed and engaged with the 
          financial world.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          As a next-generation news aggregator built on blockchain, 
          ZacroTribe empowers transparency, community-driven insights, and a 
          unique reward system to deliver the latest, most reliable news on 
          cryptocurrency, forex, and stock markets—all while rewarding you for active 
          participation.
        </p>
        
        <Testimonial />
      </div>
      
      <FeatureTagsList features={features} />
    </motion.div>
  );
};

const Testimonial = () => {
  return (
    <div className="pt-6 border-t border-zacro-purple/20">
      <p className="text-lg md:text-xl italic text-white/80">
        "Whether you're new to finance or a seasoned investor, 
        ZacroTribe offers the added benefit of a reward system. It's more than just a 
        news platform; it's a financial knowledge ecosystem where learning, sharing, 
        and engaging are celebrated and rewarded."
      </p>
    </div>
  );
};

const FeatureTagsList = ({ features }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {features.map((feature) => (
        <FeatureTag 
          key={feature.label}
          color={feature.color}
          label={feature.label}
        />
      ))}
    </div>
  );
};

const AboutVisual = () => {
  return (
    <motion.div 
      className="h-[300px] md:h-[400px] relative"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 purple-glow rounded-2xl overflow-hidden">
        <SplineScene 
          scene=""
          imageSrc="/lovable-uploads/2fd27f6f-a71c-412c-b3f3-9322356fb270.png" 
          altText="Zacro Tribe Character"
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default AboutZacroTribe;
