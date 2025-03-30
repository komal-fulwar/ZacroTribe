
import { Shield, BarChart3, Clock } from 'lucide-react';
import { ReactNode } from 'react';

export interface Challenge {
  icon: ReactNode;
  title: string;
  description: string;
}

export const challenges: Challenge[] = [
  {
    icon: <Shield size={32} />,
    title: "Centralization",
    description: "Moving past media monopolies to allow diverse voices in shaping narratives.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Lack of Transparency",
    description: "Verifying blockchain news to ensure content remains truthful and reliable.",
  },
  {
    icon: <Clock size={32} />,
    title: "Inefficient Information Flow",
    description: "Ensuring news reaches you in real-time, without bias or delay.",
  },
];
