
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Users } from 'lucide-react';
import FloatingCard from './FloatingCard';
import SplineScene from './SplineScene';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FileText size={32} />,
      title: "For Beginners",
      description: "Get trusted, curated content without the hassle of sorting through biased news.",
      image: "/public/lovable-uploads/87f53391-9fcb-4330-9a18-62f25e32bfae.png"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "For Experts",
      description: "Take advantage of advanced analytics, technical insights, and a thriving community to sharpen your strategy.",
      image: "/public/lovable-uploads/d4a95998-a16e-49b1-a3f3-7340a83ab691.png"
    },
    {
      icon: <Users size={32} />,
      title: "For Everyone",
      description: "Engage with reliable financial news while earning rewards, exploring investment options, and connecting with others.",
      image: "/public/lovable-uploads/1557753a-f3b3-43d5-a14b-116f86acccbb.png"
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
            BENEFITS
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="zacro-gradient-text">ZacroTribe?</span>
          </h2>
          
          <p className="text-white/70 max-w-3xl mx-auto">
            Discover how ZacroTribe transforms the way you interact with financial news and information.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FloatingCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.2}
              className="h-full flex flex-col"
            />
          ))}
        </div>
      </div>
      
      <SplineScene 
        scene="https://prod.spline.design/tNV7jQWANFCNJmDF/scene.splinecode" 
        imageSrc="/public/lovable-uploads/1557753a-f3b3-43d5-a14b-116f86acccbb.png"
        altText="ZacroTribe benefits visualization"
        className="opacity-30 absolute inset-0 z-[-1]"
      />
    </section>
  );
};

export default BenefitsSection;
