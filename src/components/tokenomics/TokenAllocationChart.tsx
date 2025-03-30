
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { InfoIcon } from 'lucide-react';
import { TokenAllocationItem } from './types';
import { useIsMobile } from '@/hooks/use-mobile';

interface TokenAllocationChartProps {
  tokenAllocation: TokenAllocationItem[];
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }: any) => {
  if (percent < 0.05) return null; // Don't render labels for small segments
  
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  return (
    <text 
      x={x} 
      y={y} 
      fill="#fff" 
      textAnchor="middle" 
      dominantBaseline="central"
      className="text-[10px] font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TokenAllocationChart = ({ tokenAllocation }: TokenAllocationChartProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card p-4 md:p-6 relative overflow-hidden rounded-2xl border border-purple-500/20 bg-black/30 backdrop-blur-md h-[320px] md:h-[400px] shadow-xl shadow-purple-900/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-800/5 z-0"></div>
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center">
        <div className={`w-full ${isMobile ? 'h-3/4' : 'w-[65%] h-full'} flex items-center justify-center relative`}>
          <div className="w-full h-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={isMobile ? 200 : 320}>
              <PieChart>
                <Pie
                  data={tokenAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={isMobile ? 55 : 85}
                  outerRadius={isMobile ? 80 : 120}
                  paddingAngle={1.5}
                  dataKey="value"
                  strokeWidth={2}
                  stroke="#11091f"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {tokenAllocation.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      className="hover:opacity-90 transition-opacity"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Centered total supply overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm rounded-full ${isMobile ? 'w-[120px] h-[120px]' : 'w-[160px] h-[160px]'} border border-purple-500/20`}>
              <p className="text-gray-300 text-xs md:text-sm mb-1">Total Supply</p>
              <p className="text-base md:text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">1 Billion</p>
              <p className="text-sm md:text-lg font-semibold text-purple-300">ZACR</p>
            </div>
          </div>
        </div>
        
        <div className={`${isMobile ? 'w-full h-1/4 mt-2' : 'w-[35%] pl-2'}`}>
          {!isMobile && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white mb-2">Token Allocation</h3>
              <p className="text-sm text-gray-300">The ZACR token supply is distributed strategically to ensure long-term project sustainability and community growth.</p>
              <ul className="text-xs text-gray-400 space-y-1.5 mt-4">
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
                  <span>Community rewards ensure active participation</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                  <span>Liquidity allocation provides market stability</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></span>
                  <span>Staking incentivizes long-term hodling</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-0 right-0 px-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {tokenAllocation.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <div 
                className="w-2 h-2 md:w-3 md:h-3 rounded-sm" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-[10px] md:text-xs text-white/70">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TokenAllocationChart;
