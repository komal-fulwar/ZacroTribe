import { motion } from 'framer-motion';
import { Mail, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Twitter size={20} />, label: 'Twitter', url: '#' },
    { icon: <Github size={20} />, label: 'Github', url: '#' },
    { icon: <Mail size={20} />, label: 'Email', url: 'mailto:info@zacrotribe.com' },
  ];

  const footerLinks = {
    platform: [
      { label: 'Home', url: '#' },
      { label: 'Features', url: '#' },
      { label: 'Roadmap', url: '#' },
      { label: 'Tokenomics', url: '#' },
    ],
    resources: [
      { label: 'Documentation', url: '#' },
      { label: 'Whitepaper', url: '#' },
      { label: 'GitHub', url: '#' },
      { label: 'Media Kit', url: '#' },
    ],
    company: [
      { label: 'About Us', url: '#' },
      { label: 'Team', url: '#' },
      { label: 'Careers', url: '#' },
      { label: 'Contact', url: '#' },
    ],
  };

  return (
    <footer className="bg-zacro-darker pt-24 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">ZacroTribe</h2>
              <p className="text-white/60 max-w-md">
                Empowering the future of decentralized financial information sharing and community-driven insights.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-sm text-white/40 mb-3 uppercase">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-zacro-purple/50"
                />
                <Button className="bg-zacro-purple hover:bg-zacro-purple/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-zacro-purple/20 border border-white/10 text-white/70 hover:text-zacro-purple transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-medium mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a href={link.url} className="text-white/60 hover:text-zacro-purple transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
         
     
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <div className="mb-4 md:mb-0">
            © {currentYear} ZacroTribe. All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
