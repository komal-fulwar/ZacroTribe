
import { motion } from 'framer-motion';

const TokenomicsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
        TOKENOMICS
      </span>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Token <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Distribution</span>
      </h2>
      
      <p className="text-white/70 max-w-3xl mx-auto">
        ZacroTribe's tokenomics model is designed for sustainable growth, community rewards, and long-term value creation in the decentralized financial ecosystem.
      </p>
    </motion.div>
  );
};

export default TokenomicsHeader;
