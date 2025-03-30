
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Building, Globe, Award, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SplineScene from './SplineScene';

const HowToBuySection = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [selectedBlockchain, setSelectedBlockchain] = useState('bnb');
  const [bnbAmount, setBnbAmount] = useState('0.0');
  const [zacroAmount, setZacroAmount] = useState('0');
  
  const tokenAddress = '0xc3597879e51c671f2d299910b463966455596';
  
  const steps = [
    {
      number: 1,
      title: "Get a Wallet",
      description: "You'll need a wallet like Metamask to store your $ZACRO tokens."
    },
    {
      number: 2,
      title: "Get some BNB",
      description: "ZACRO is on Binance Smart Chain Blockchain, so you'll need some BNB or USDT tokens to purchase it."
    },
    {
      number: 3,
      title: "Buy on our website",
      description: "Click on Buy Now, connect wallet, enter the amount, and complete the transaction."
    }
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };
  
  const calculateZacroAmount = (bnbValue: string) => {
    const bnbNumeric = parseFloat(bnbValue) || 0;
    return Math.floor(bnbNumeric * 53100.40).toString();
  };
  
  const handleBnbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBnbAmount(value);
    setZacroAmount(calculateZacroAmount(value));
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-zacro-dark overflow-hidden" id="howtobuy">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
            GET STARTED
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How to <span className="text-purple-400">Buy?</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-800/50"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex gap-6"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-purple-800/30"></div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-12"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Add ZACRO Token in your wallet</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-white/60 mb-1">Token Name:</div>
                    <div className="font-medium">ZacroTribe</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-white/60 mb-1">Symbol:</div>
                    <div className="font-medium">ZACRO</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-white/60 mb-1">Address:</div>
                    <div className="flex items-center">
                      <div className="font-mono text-sm bg-black/20 p-2 rounded mr-2 overflow-hidden overflow-ellipsis max-w-[90%]">
                        {tokenAddress}
                      </div>
                      <button 
                        onClick={handleCopyAddress}
                        className="text-zacro-purple hover:text-purple-400 transition-colors"
                      >
                        {copiedAddress ? <Check size={18} /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-white/60">
                  Once added, users will be able to see their ZACRO tokens in their wallets.
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card p-8">
              <div className="bg-purple-600 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-1">
                  <div className="text-white">1 Zacro = $0.01</div>
                  <div className="text-white">Next = $0.02</div>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                  <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div className="text-white/80">Remaining: 38.5M ZACRO</div>
                  <div className="text-white/80">75% Sold</div>
                </div>
                
                <div className="mt-4 text-right">
                  <div className="text-white font-bold">Total Raised: $130,725.00</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-white/70 mb-2">Exchange Rate: 1 BNB = 53,100.40 ZACRO</div>
                
                <div className="glass-card p-4 mb-4">
                  <label className="block text-sm text-white/60 mb-1">Amount</label>
                  <div className="flex justify-between items-center">
                    <input
                      type="number"
                      value={bnbAmount}
                      onChange={handleBnbChange}
                      min="0"
                      step="0.01"
                      className="bg-transparent text-white text-xl outline-none w-full"
                      placeholder="0.0"
                    />
                    <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      BNB
                    </button>
                  </div>
                </div>
                
                <div className="text-center my-4">
                  <div className="w-8 h-8 bg-purple-900/50 rounded-full mx-auto flex items-center justify-center">
                    <ArrowRight size={16} className="rotate-90 text-purple-400" />
                  </div>
                </div>
                
                <div className="glass-card p-4 mb-6">
                  <label className="block text-sm text-white/60 mb-1">You will receive</label>
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      value={zacroAmount}
                      readOnly
                      className="bg-transparent text-white text-xl outline-none w-full"
                    />
                    <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      ZACRO
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm text-white/60 mb-2">Select Blockchain</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedBlockchain('bnb')}
                      className={`p-3 rounded-lg flex items-center justify-center ${
                        selectedBlockchain === 'bnb' 
                          ? 'bg-orange-500/20 border border-orange-500' 
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full mr-2 bg-orange-500 flex items-center justify-center">
                        {selectedBlockchain === 'bnb' && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span>BNB Chain</span>
                    </button>
                    
                    <button
                      onClick={() => setSelectedBlockchain('eth')}
                      className={`p-3 rounded-lg flex items-center justify-center ${
                        selectedBlockchain === 'eth' 
                          ? 'bg-blue-500/20 border border-blue-500' 
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full mr-2 bg-blue-500 flex items-center justify-center">
                        {selectedBlockchain === 'eth' && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span>Ethereum</span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full glass-card p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all">
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Connect Wallet</span>
                    </div>
                  </button>
                  
                  <button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-white font-medium">
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Buy $ZACRO Now</span>
                      <ArrowRight size={18} />
                    </div>
                  </button>
                  
                  <div className="text-center text-xs text-white/60">
                    By purchasing you agree to our Terms of Service
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
