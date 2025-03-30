
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is ZacroTribe?",
    answer: "ZacroTribe is a decentralized financial news and insights platform that leverages blockchain and AI to provide accurate, transparent, and actionable financial information. It empowers users with tools, rewards, and community-driven governance."
  },
  {
    question: "What are ZACRO Tokens, and how can I utilize them?",
    answer: "You can earn ZACR tokens by actively participating in the ecosystem – sharing insights, creating content, referring new users, and contributing to community initiatives. Additionally, you can earn passive rewards through our staking program."
  },
  {
    question: "What makes ZacroTribe different from traditional financial news platforms?",
    answer: "ZACRO tokens are the native utility tokens of the ZacroTribe ecosystem. They can be earned through content engagement, staked for rewards, used to access premium tools, and traded on cryptocurrency exchanges."
  },
  {
    question: "What are the core features of the ZacroTribe platform?",
    answer: "Key features include decentralized news aggregation to deliver verified, real-time financial updates directly to your feed. The platform offers AI-powered analytics that provide deep insights into market trends, precise trading signals, and comprehensive sentiment analysis. Users can earn rewards through a system leveraging ZACRO tokens for active engagement, sharing, and contributing. Additionally, community governance and engagement tools facilitate collaboration among like-minded investors, enhancing overall participation and informed decision-making."
  },
  {
    question: "How can I earn rewards on ZacroTribe?",
    answer: "Users earn ZACRO tokens by engaging in various activities such as reading and sharing valuable content, creating high-quality financial insights, and actively participating in governance and community-related initiatives. This reward system incentivizes users to contribute meaningfully, fostering a vibrant and informed community."
  },
  {
    question: "How can I participate in the ZACRO token presale?",
    answer: "You can join the ZACRO presale by connecting your wallet on the ZacroTribe platform and purchasing tokens using supported cryptocurrencies like ETH or BNB"
  },
  {
    question: "Where can I find updates on ZacroTribe’s progress?",
    answer: "You can follow ZacroTribe on social media platforms like Twitter, and Telegram or subscribe to the platform’s newsletter for the latest updates and insights."
  },
  {
    question: "How can I add the ZacroTribe Token to my decentralized wallet?",
    answer: "To add the ZacroTribe Token to your decentralized wallet, go to the How to Buy section and copy the token address. Then, open your wallet, navigate to the Custom Token section, and paste the address there. This will successfully add ZacroTribe to your wallet."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-zacro-darker to-zacro-dark overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zacro-purple/10 text-zacro-purple border border-zacro-purple/20 mb-4">
            QUESTIONS
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-white/70 max-w-3xl mx-auto">
            Find answers to the most common questions about ZacroTribe, our tokens, and ecosystem
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Collapsible
                open={openItems[index]}
                onOpenChange={() => toggleItem(index)}
                className="glass-card border border-purple-500/20 bg-black/30 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-5 text-left">
                  <h3 className="text-lg md:text-xl font-medium text-white">{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-purple-400 transition-transform duration-300 ${openItems[index] ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-5 pb-5">
                  <p className="text-white/70">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default FAQSection;
