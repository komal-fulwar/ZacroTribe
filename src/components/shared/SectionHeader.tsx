
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

const SectionHeader = ({ badge, title, titleHighlight, description }: SectionHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-10 sm:mb-16"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
        {badge}
      </span>
      
      <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold mb-4 sm:mb-6`}>
        {title} <span className="bg-gradient-to-r from-zacro-purple to-zacro-light-purple bg-clip-text text-transparent">{titleHighlight}</span>
      </h2>
      
      <p className="text-white/70 max-w-3xl mx-auto text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
