
import { motion } from 'framer-motion';
import FloatingCard from '../FloatingCard';
import { Challenge } from '@/data/challenges';

interface ChallengesGridProps {
  challenges: Challenge[];
}

const ChallengesGrid = ({ challenges }: ChallengesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {challenges.map((challenge, index) => (
        <FloatingCard
          key={challenge.title}
          icon={challenge.icon}
          title={challenge.title}
          description={challenge.description}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};

export default ChallengesGrid;
