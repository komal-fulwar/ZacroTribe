
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import SectionHeader from '../shared/SectionHeader';
import { useIsMobile } from '@/hooks/use-mobile';

const ZacroFeatures = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <SectionHeader 
        badge="FEATURES"
        title="Zacro"
        titleHighlight="Features"
        description="Discover the powerful features that make ZacroTribe the ultimate financial news platform"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title="Real-time Updates"
          description="Get instant notifications on market movements and financial developments as they happen."
          delay={0.1}
        />
        
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="Token Rewards"
          description="Earn Zacro tokens for contributing quality content, sharing insights, and active participation."
          delay={0.2}
        />
        
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
          title="Blockchain Security"
          description="Built on robust blockchain technology ensuring transparency, security, and immutability."
          delay={0.3}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="glass-card p-6 border-zacro-purple/20 hover:border-zacro-purple/40 transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zacro-purple to-zacro-blue flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default ZacroFeatures;
