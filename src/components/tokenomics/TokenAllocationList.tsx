
import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';
import { TokenAllocationItem } from './types';

interface TokenAllocationListProps {
  tokenAllocation: TokenAllocationItem[];
}

const TokenAllocationList = ({ tokenAllocation }: TokenAllocationListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="glass-card p-8 rounded-2xl border border-purple-500/20 bg-black/30 backdrop-blur-md shadow-xl shadow-purple-900/20">
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/30">
            <Coins size={16} />
          </div>
          <h3 className="text-xl font-bold text-white">Token Distribution</h3>
        </div>
        
        <div className="space-y-5">
          {tokenAllocation.map((item, index) => (
            <div key={index} className="relative">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-white font-medium flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </span>
                <span className="font-bold text-white">{item.value}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${item.value}%`, 
                    backgroundColor: item.color,
                    boxShadow: `0 0 10px ${item.color}80`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-purple-500/20">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Total Token Supply:</span>
            <span className="text-lg font-bold text-white">1,000,000,000 ZACR</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TokenAllocationList;
