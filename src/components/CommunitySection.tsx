
import { motion } from 'framer-motion';
import { Users, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  const communityStats = [
    {
      icon: <Users size={32} />,
      value: "75K+",
      label: "Community Members"
    },
    {
      icon: <MessageSquare size={32} />,
      value: "25K+",
      label: "Daily Active Users"
    },
    {
      icon: <Globe size={32} />,
      value: "120+",
      label: "Countries Represented"
    }
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
            COMMUNITY
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="zacro-gradient-text">Global Community</span>
          </h2>
          
          <p className="text-white/70 max-w-3xl mx-auto">
            Be part of a growing ecosystem of crypto enthusiasts, traders, and financial experts from around the world.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 text-center"
            >
              <div className="flex justify-center text-zacro-purple mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="glass-card py-12 px-6 md:px-12 max-w-3xl mx-auto border border-zacro-purple/30">
            <h3 className="text-2xl font-bold mb-6">Ready to join us?</h3>
            <p className="text-white/70 mb-8">
              Become part of our growing community today and help shape the future of decentralized financial news.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
             
              <Button variant="outline" className="bg-transparent border-zacro-purple/50 text-white hover:bg-zacro-purple/10 rounded-full px-6 py-6">
                Follow on Twitter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
