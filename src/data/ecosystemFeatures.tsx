
import { Layers, BarChart2, Zap, Shield, Rocket, Coins, Award, Lock } from 'lucide-react';
import { ReactNode } from 'react';

export interface EcosystemFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ecosystemFeatures: EcosystemFeature[] = [
  {
    icon: <Layers size={32} />,
    title: "Verified sources and AI-powered filtering",
    description: "for real-time financial news",
  },
  {
    icon: <BarChart2 size={32} />,
    title: "AI-driven insights and trading signals",
    description: "to inform your decisions",
  },
  {
    icon: <Zap size={32} />,
    title: "Earn ZAC tokens",
    description: "for engaging, sharing, and contributing",
  },
  {
    icon: <Shield size={32} />,
    title: "Get the most curated news updates",
    description: "before anyone else",
  },
  {
    icon: <Rocket size={32} />,
    title: "Launch project campaigns",
    description: "with community support and funding",
  },
  {
    icon: <Coins size={32} />,
    title: "Staking rewards",
    description: "earn passive income through high-yield pools",
  },
  {
    icon: <Award size={32} />,
    title: "Exclusive membership tiers",
    description: "access premium features and events",
  },
  {
    icon: <Lock size={32} />,
    title: "Advanced security protocols",
    description: "ensuring your assets remain protected",
  },
];
