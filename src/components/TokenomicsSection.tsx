
import { useState } from 'react';
import TokenomicsHeader from './tokenomics/TokenomicsHeader';
import TokenomicsTabs from './tokenomics/TokenomicsTabs';
import AllocationTab from './tokenomics/AllocationTab';
import VestingTab from './tokenomics/VestingTab';
import UtilityTab from './tokenomics/UtilityTab';
import { TokenomicsTab } from './tokenomics/types';
import { useIsMobile } from '@/hooks/use-mobile';

const TokenomicsSection = () => {
  const [activeTab, setActiveTab] = useState<TokenomicsTab>('allocation');
  const isMobile = useIsMobile();
  
  const tokenAllocation = [
    { name: 'Presale', value: 30, color: '#9b87f5' },
    { name: 'Team & Advisors', value: 15, color: '#7E69AB' },
    { name: 'Marketing', value: 15, color: '#4F46E5' },
    { name: 'Community Rewards', value: 20, color: '#8B5CF6' },
    { name: 'Staking Pool', value: 8, color: '#06B6D4' },
    { name: 'Liquidity Pool', value: 10, color: '#0D9488' },
    { name: 'Airdrops & Bonus', value: 2, color: '#D946EF' },
  ];

  return (
    <section className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-zacro-dark to-zacro-dark/90 overflow-hidden" id="tokenomics">
      <div className="max-w-7xl mx-auto">
        <TokenomicsHeader />
        <TokenomicsTabs activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} />
        
        {activeTab === 'allocation' && (
          <AllocationTab tokenAllocation={tokenAllocation} />
        )}
        
        {activeTab === 'vesting' && (
          <VestingTab />
        )}
        
        {activeTab === 'utility' && (
          <UtilityTab />
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default TokenomicsSection;
