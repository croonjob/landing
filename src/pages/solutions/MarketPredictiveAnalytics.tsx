import { SolutionPage } from '@/components/solutions/SolutionPage';

const features = [
  {
    title: 'Market Data Mining',
    description: 'Build systems to gather and analyze data from multiple sources for insights.',
  },
  {
    title: 'Consumer Analysis',
    description: 'Create tools to understand purchasing patterns and predict behavior.',
  },
  {
    title: 'Opportunity Discovery',
    description: 'Build AI tools to identify market gaps and emerging needs.',
  },
  {
    title: 'Lead Scoring',
    description: 'Develop custom models to score and prioritize potential customers.',
  },
  {
    title: 'Price Intelligence',
    description: 'Create systems to monitor and predict market price movements.',
  },
  {
    title: 'Risk Monitoring',
    description: 'Build alert systems for market signals that could impact your business.',
  },
];

const benefits = [
  'Gain insights into market trends',
  'Identify opportunities unique to your business',
  'Prioritize resources on high-value prospects',
  'Reduce uncertainty in strategic planning',
  'Make proactive decisions based on data',
  'Build competitive intelligence for your team',
];

export default function MarketPredictiveAnalytics() {
  return (
    <SolutionPage
      title="Market Intelligence & Analytics"
      subtitle="Solutions"
      description="Build custom solutions that turn market data into actionable intelligence for strategic decision-making."
      features={features}
      benefits={benefits}
      gradientColors="from-pink-600 to-purple-600"
      imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
      secondImageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    />
  );
}