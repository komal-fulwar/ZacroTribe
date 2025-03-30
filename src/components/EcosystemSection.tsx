
import { ecosystemFeatures } from '@/data/ecosystemFeatures';
import EcosystemHeader from './ecosystem/EcosystemHeader';
import FeaturesGrid from './ecosystem/FeaturesGrid';

const EcosystemSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-zacro-darker">
      <div className="max-w-7xl mx-auto">
        <EcosystemHeader />
        <FeaturesGrid features={ecosystemFeatures} />
      </div>
    </section>
  );
};

export default EcosystemSection;
