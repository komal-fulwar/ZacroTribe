
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionHeader from '../shared/SectionHeader';
import { useIsMobile } from '@/hooks/use-mobile';

const AirdropAnnouncement = () => {
  const isMobile = useIsMobile();

  return (
    <div className="container mx-auto px-4 relative z-10">
      <SectionHeader 
        badge="AIRDROP PROGRAM"
        title="Announcing"
        titleHighlight="Zacro Airdrop"
        description="Buy Zacro Token For 5000 USDT And Join Our Exclusive Airdrop Program With 5M USDT Worth Of Zacro"
      />
      
      <motion.div 
        className="max-w-3xl mx-auto bg-zacro-darker/40 backdrop-blur-md border border-zacro-purple/20 rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AirdropDetails />
      </motion.div>
    </div>
  );
};

const AirdropDetails = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-zacro-purple to-zacro-light-purple rounded-full"></div>
        <div>
          <p className="text-white text-lg">
            Buy Zacro Token For <span className="text-green-500 font-bold">5000 USDT</span><br />
            And Join In Our Airdrop Program
          </p>
        </div>
      </div>
      
      <p className="text-xl md:text-2xl font-bold text-white mb-8">
        Airdrop Allocation <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">5M USDT</span> Worth Of Zacro.<br />Be A Part Of It.
      </p>
      
      <Button 
        className="bg-gradient-to-r from-zacro-purple to-zacro-light-purple hover:opacity-90 text-white rounded-full px-8 py-6 text-lg font-semibold w-full sm:w-auto"
      >
        Join Airdrop
      </Button>
    </div>
  );
};

export default AirdropAnnouncement;
