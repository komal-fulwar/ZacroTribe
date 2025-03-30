
import { motion } from 'framer-motion';
import { BookOpen, Users, Shield } from 'lucide-react';
import SplineScene from '../SplineScene';
import SectionHeader from '../shared/SectionHeader';
import FeatureTag from '../shared/FeatureTag';
import { useIsMobile } from '@/hooks/use-mobile';
import ImageName from './(3D) - Carries heavy coins.png'

const AboutZacroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader 
          badge="ABOUT US"
          title="About"
          titleHighlight="Zacro Tribe"
          description="A pioneering, cutting-edge decentralized financial news platform transforming how you stay informed"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          <motion.div 
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutContent />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AboutVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutContent = () => {
  // Here's the fix: using literal types that match the expected "green" | "blue" | "purple" types
  // instead of potentially other string values
  const features = [
    { color: "green" as const, label: "Community Driven" },
    { color: "blue" as const, label: "Blockchain Powered" },
    { color: "purple" as const, label: "Reward System" }
  ];
  
  return (
    <div className="space-y-6 p-10">
      <div className="space-y-6 text-white">
        <p className="text-lg leading-relaxed">
          ZacroTribe is a pioneering, cutting-edge decentralized financial news 
          platform that is transforming how you stay informed and engaged with the 
          financial world.
        </p>
        
        <AboutFeatures />
        
        <p className="text-lg leading-relaxed">
          As a next-generation news aggregator built on blockchain, 
          ZacroTribe empowers transparency, community-driven insights, and a 
          unique reward system to deliver the latest, most reliable news on 
          cryptocurrency, forex, and stock markets—all while rewarding you for active 
          participation.
        </p>
      </div>
      
      <div className="pt-6 border-t border-zacro-purple/20">
        <p className="text-lg italic text-white/80">
          "Whether you're new to finance or a seasoned investor, 
          ZacroTribe offers the added benefit of a reward system. It's more than just a 
          news platform; it's a financial knowledge ecosystem where learning, sharing, 
          and engaging are celebrated and rewarded."
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-8">
        {features.map((feature) => (
          <FeatureTag 
            key={feature.label}
            color={feature.color}
            label={feature.label}
          />
        ))}
      </div>
    </div>
  );
};

const AboutFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
      <Feature 
        icon={<Users className="text-green-400" />}
        title="Community Driven"
        description="Built by the community, for the community. Your voice matters."
      />
      <Feature 
        icon={<BookOpen className="text-blue-400" />}
        title="Knowledge Hub"
        description="Access curated financial insights and educational resources."
      />
      <Feature 
        icon={<Shield className="text-zacro-purple" />}
        title="Trustworthy News"
        description="Verified content with blockchain-backed authentication."
      />
    </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="p-4 bg-zacro-darker/40 backdrop-blur-sm border border-zacro-purple/10 rounded-xl">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5">
          {icon}
        </div>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

const AboutVisual = () => {
  return (
    <div className="h-[400px] relative p-10 mt-8 lg:mt-0">
      <motion.div 
        className="absolute inset-0 purple-glow rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
        <img src={ImageName} alt="Image" />
      </motion.div>
    </div>
  );
};

export default AboutZacroSection;
