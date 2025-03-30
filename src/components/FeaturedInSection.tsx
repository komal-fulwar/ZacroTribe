
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

// Mock data for featured publications
const featuredPublications = [
  { name: 'TechCrunch', logo: '/lovable-uploads/download.png ' },
  { name: 'TechCrunch', logo: '/lovable-uploads/download (1).png ' },
  { name: 'Forbes', logo: '/lovable-uploads/download (2).png' },
  { name: 'Bloomberg', logo: '/lovable-uploads/download (3).png' },
  { name: 'Coindesk', logo: '/lovable-uploads/download (4).png' },
  { name: 'Cointelegraph', logo: '/lovable-uploads/download (6).png' },
  { name: 'TechCrunch', logo: '/lovable-uploads/download (7).png' },
  { name: 'Forbes', logo: '/lovable-uploads/download (8).png' },
  { name: 'Bloomberg', logo: '/lovable-uploads/download (9).png' },
  { name: 'Coindesk', logo: '/lovable-uploads/download (10).png' },
  { name: 'Cointelegraph', logo: '/lovable-uploads/download (11).png' },
  { name: 'TechCrunch', logo: '/lovable-uploads/download (12).png' },
  { name: 'Forbes', logo: '/lovable-uploads/download (13).png' },
  { name: 'Bloomberg', logo: '/lovable-uploads/download (14).png' },
];

const FeaturedInSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-zacro-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-zacro-purple/5 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="text-zacro-purple" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured In</h2>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto">
            ZacroTribe has been recognized by leading publications and platforms in the blockchain and finance industry.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="carousel-container overflow-hidden">
            <div className="logos-slide flex items-center animate-scroll">
              {featuredPublications.map((publication, index) => (
                <div key={index} className="mx-4 min-w-[150px] h-16 md:h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300">
                  <img 
                    src={publication.logo} 
                    alt={`${publication.name} logo`} 
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              ))}
              
              {/* Duplicate the items to create a seamless loop */}
              {featuredPublications.map((publication, index) => (
                <div key={`dup-${index}`} className="mx-4 min-w-[150px] h-16 md:h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300">
                  <img 
                    src={publication.logo} 
                    alt={`${publication.name} logo`} 
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .carousel-container {
            width: 100%;
            overflow: hidden;
          }
          
          .logos-slide {
            animation: scroll 30s linear infinite;
            display: flex;
            width: fit-content;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturedInSection;
