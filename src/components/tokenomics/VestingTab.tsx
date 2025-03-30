
import { motion } from 'framer-motion';
import { Hourglass } from 'lucide-react';

const VestingTab = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="glass-card p-8 rounded-2xl border border-purple-500/20 bg-black/30 backdrop-blur-md shadow-xl shadow-purple-900/20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white shadow-lg">
            <Hourglass size={20} />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Vesting Schedule</h3>
        </div>
        
        <p className="text-white/70 mb-8">
          Our vesting schedule is designed to ensure long-term commitment from the team and early investors,
          while providing liquidity for the ecosystem's growth and development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card p-6 rounded-xl border border-purple-500/10 bg-purple-900/10 backdrop-blur-md hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <h4 className="text-lg font-medium mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Team & Advisors</h4>
            <p className="text-white/70 mb-2">15% of total supply</p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-purple-500"></span>
              <p>1-year cliff, then 25% every 6 months</p>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-purple-500/10 bg-purple-900/10 backdrop-blur-md hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <h4 className="text-lg font-medium mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Presale</h4>
            <p className="text-white/70 mb-2">30% of total supply</p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-purple-500"></span>
              <p>20% at TGE, then 20% monthly</p>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-purple-500/10 bg-purple-900/10 backdrop-blur-md hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <h4 className="text-lg font-medium mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Liquidity & Marketing</h4>
            <p className="text-white/70 mb-2">25% of total supply</p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-purple-500"></span>
              <p>10% at TGE, then 15% quarterly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VestingTab;
