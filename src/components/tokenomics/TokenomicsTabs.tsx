
import { Coins, Hourglass, Zap } from 'lucide-react';
import { TokenomicsTab } from './types';

interface TokenomicsTabsProps {
  activeTab: TokenomicsTab;
  setActiveTab: (tab: TokenomicsTab) => void;
  isMobile?: boolean;
}

const TokenomicsTabs = ({ activeTab, setActiveTab, isMobile }: TokenomicsTabsProps) => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto pb-2">
      <div className={`inline-flex rounded-full p-1 bg-purple-900/30 backdrop-blur-md border border-purple-500/20 ${isMobile ? 'flex-wrap justify-center gap-2' : ''}`}>
        <button
          className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all flex items-center gap-1 md:gap-2 ${
            activeTab === 'allocation'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => setActiveTab('allocation')}
        >
          <Coins size={isMobile ? 14 : 16} />
          <span className="whitespace-nowrap">Token Allocation</span>
        </button>
        <button
          className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all flex items-center gap-1 md:gap-2 ${
            activeTab === 'vesting'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => setActiveTab('vesting')}
        >
          <Hourglass size={isMobile ? 14 : 16} />
          <span className="whitespace-nowrap">Vesting Schedule</span>
        </button>
        <button
          className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all flex items-center gap-1 md:gap-2 ${
            activeTab === 'utility'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => setActiveTab('utility')}
        >
          <Zap size={isMobile ? 14 : 16} />
          <span className="whitespace-nowrap">Token Utility</span>
        </button>
      </div>
    </div>
  );
};

export default TokenomicsTabs;
