
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Users } from 'lucide-react';
import FloatingCard from './FloatingCard';

const MissionSection = () => {
  const missions = [
    {
      icon: <Shield size={32} />,
      title: "Accessibility to all",
      description: "No matter your background, professional level, knowledge, and educational resources to guide you.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Verifying blockchain news",
      description: "We ensure accurate verification of all content with community oversight.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration and rewards",
      description: "We encourage active contribution to the ecosystem through participation and rewards.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-zacro-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
            ABOUT US
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="zacro-gradient-text">Mission & Vision</span>
          </h2>
          
          <p className="text-white/70 max-w-3xl mx-auto">
            ZacroTribe is driven by a mission to democratize financial information, empower every individual, and build a vibrant community. Here's how we achieve this:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <FloatingCard
              key={mission.title}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
