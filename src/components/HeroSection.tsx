import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="hero-section  from-black  relative overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0 z-0">
        <div className="hero-grid"></div>
        <div className="absolute top-1/2 left-1 -translate-x-1 -translate-y-1/8 w-full h-full">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-zacro-purple/20 rounded-full blur-[120px]"></div>
        </div>
      </div>
    
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-zacro-purple/10 text-white border border-zacro-purple/20 tracking-wider">
              DECENTRALIZED FINANCE PLATFORM
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Welcome to <span className="bg-gradient-to-r animate-gradient-x from-zacro-purple via-zacro-light-purple to-zacro-blue bg-clip-text text-transparent">ZacroTribe</span>.
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Your gateway to <span className="bg-gradient-to-r animate-gradient-x from-zacro-blue via-zacro-purple to-zacro-light-purple bg-clip-text text-transparent">decentralized</span> financial insights
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white max-w-3xl mx-auto mb-10"
          >
            Discover the future of finance with our comprehensive platform that connects you to the best decentralized solutions in the market.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          >
            <Button className="rounded-full bg-zacro-purple hover:bg-zacro-purple/90 text-white px-7 py-6 text-base font-medium w-full sm:w-auto">
              Buy Token <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button variant="outline" className="rounded-full border-zacro-purple/50 bg-transparent hover:bg-zacro-purple/10 text-white px-7 py-6 text-base font-medium w-full sm:w-auto mt-3 sm:mt-0">
              Read Whitepaper
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a href="#vision" className="scroll-text text-white">
          Scroll to explore
        </a>
      </div>

      <style>
        {`
          @keyframes gradient-x {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
