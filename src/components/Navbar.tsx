
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from './logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "About Us", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Ecosystem", href: "/ecosystem" },
    { title: "How to Buy", href: "#howtobuy" },
    { title: "Tokenomics", href: "/tokenomics" },
    { title: "Roadmap", href: "/roadmap" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-zacro-dark/80 backdrop-blur-lg border-b border-white/5' : 'py-6'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
       
        <img width="70" height="70" src={logo} alt="Logo" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.href}
              className="text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-zacro-purple after:transition-all hover:after:w-full"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-zacro-purple hover:bg-zacro-purple/90 text-white rounded-full px-6 py-2">
            Connect Wallet
          </Button>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-zacro-darker z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-zacro-purple flex items-center justify-center text-white font-bold text-xl">Z</div>
                <span className="text-white font-bold text-xl">ZacroTribe</span>
              </Link>
              <button 
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 items-start">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white text-2xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-auto">
              <Button className="w-full bg-zacro-purple hover:bg-zacro-purple/90 text-white rounded-full px-6 py-6 text-lg">
                Connect Wallet
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
