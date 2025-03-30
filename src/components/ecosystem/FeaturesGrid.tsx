
import { EcosystemFeature } from '@/data/ecosystemFeatures';
import FloatingCard from '../FloatingCard';

interface FeaturesGridProps {
  features: EcosystemFeature[];
}

const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <FloatingCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={index * 0.1}
          className="h-full"
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
