
import { motion } from 'framer-motion';
import SectionHeader from './assets/SectionHeader';
import ChallengesGrid from './assets/ChallengesGrid';
import { challenges } from '@/data/challenges';

const AssetsSection = () => {
  return (
    <section id="vision" className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badge="OUR VISION"
          title="The Challenges in"
          titleHighlight="Financial News"
          description="ZacroTribe is addressing the key challenges in today's financial news ecosystem with innovative blockchain solutions."
        />
        
        <ChallengesGrid challenges={challenges} />
      </div>
    </section>
  );
};

export default AssetsSection;
