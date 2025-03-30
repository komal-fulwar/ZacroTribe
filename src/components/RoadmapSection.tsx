
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState('phase1');
  
  const roadmapData = {
    phase1: {
      title: "Platform Launch",
      timeframe: "Q1 2023",
      milestones: [
        "Launch platform with decentralized news aggregation",
        "Implement token utility and community governance",
        "Deploy smart contracts and perform security audits",
        "Establish UX and partnerships with global industry leaders"
      ]
    },
    phase2: {
      title: "Expansion & Integration",
      timeframe: "Q2 2023",
      milestones: [
        "Launch additional AI analytics tools for market analysis",
        "Release mobile apps for iOS and Android",
        "Implement cross-chain compatibility with additional blockchain networks",
        "Establish broader integration and strategic partnerships"
      ]
    },
    phase3: {
      title: "Advanced Features",
      timeframe: "Q3 2023",
      milestones: [
        "Introduce deep neural network powered market analysis",
        "Implement enhanced AI prediction tools for traders",
        "Expand community governance and sector differentiation features"
      ]
    },
    phase4: {
      title: "Institutional Adoption",
      timeframe: "Q4 2023",
      milestones: [
        "Establish institutional partnerships with banks and funds",
        "Deploy agency-level insights for personalized investment strategy",
        "Launch specialized financial reporting for audit needs",
        "Transition to DAO governance and enhance compliance frameworks"
      ]
    }
  };

  const handlePhaseClick = (phase: string) => {
    setActivePhase(phase);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-zacro-dark" id="roadmap">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
            FUTURE PLANS
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Roadmap to <span className="text-purple-400">Success</span>
          </h2>
          
          <p className="text-white/70 max-w-3xl mx-auto">
            The roadmap for ZacroTribe outlines a clear and ambitious trajectory for the platform's growth, development, and long-term success.
          </p>
        </motion.div>
        
        {/* Phase navigation tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
          {Object.keys(roadmapData).map((phase) => (
            <button
              key={phase}
              onClick={() => handlePhaseClick(phase)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activePhase === phase
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 hover:bg-white/10 text-white/70'
              }`}
            >
              {roadmapData[phase as keyof typeof roadmapData].title}
            </button>
          ))}
        </div>
        
        {/* Visual timeline */}
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-purple-800/50"></div>
          
          {/* Timeline Items */}
          <div className="relative z-10">
            {Object.keys(roadmapData).map((phase, index) => (
              <motion.div 
                key={phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`mb-20 ${index % 2 === 0 ? 'lg:pr-[50%]' : 'lg:pl-[50%] lg:ml-auto'}`}
              >
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 lg:left-auto ${
                    index % 2 === 0 ? 'lg:right-0 lg:translate-x-1/2' : 'lg:left-0 lg:-translate-x-1/2'
                  } -translate-x-1/2 -top-2 lg:-top-2 w-8 h-8 rounded-full ${
                    phase === activePhase ? 'bg-purple-600' : 'bg-purple-800/70'
                  } border-4 border-zacro-dark flex items-center justify-center z-20`}>
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div 
                    className={`glass-card p-6 rounded-xl relative overflow-hidden lg:w-[90%] ${
                      phase === activePhase ? 'border border-purple-500/50 shadow-lg shadow-purple-500/20' : ''
                    } ${index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10'}`}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {roadmapData[phase as keyof typeof roadmapData].title}
                      </h3>
                      <div className="text-sm font-medium text-purple-400">
                        {roadmapData[phase as keyof typeof roadmapData].timeframe}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {roadmapData[phase as keyof typeof roadmapData].milestones.map((milestone, mIndex) => (
                        <li key={mIndex} className="flex items-start space-x-3">
                          <div className="mt-1 flex-shrink-0">
                            <div className={`w-4 h-4 rounded-full ${
                              phase === activePhase ? 'bg-purple-600/50' : 'bg-purple-800/30'
                            } flex items-center justify-center`}>
                              <div className={`w-2 h-2 rounded-full ${
                                phase === activePhase ? 'bg-purple-500' : 'bg-purple-700'
                              }`}></div>
                            </div>
                          </div>
                          <span className="text-white/80 text-sm">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
