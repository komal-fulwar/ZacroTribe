
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FloatingCard = ({ 
  icon, 
  title, 
  description, 
  className = '', 
  delay = 0 
}: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: delay
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`glass-card p-6 card-hover ${className}`}
    >
      {icon && (
        <div className="mb-4 text-zacro-purple">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default FloatingCard;
