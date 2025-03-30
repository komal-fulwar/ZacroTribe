
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

const SectionHeader = ({ badge, title, titleHighlight, description }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
        {badge}
      </span>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {title} <span className="zacro-gradient-text">{titleHighlight}</span>
      </h2>
      
      <p className="text-white/70 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
