import { SolutionPage } from '@/components/solutions/SolutionPage';

const features = [
  {
    title: 'Report Generation System',
    description: 'Build custom systems that automatically generate sales reports and performance summaries.',
  },
  {
    title: 'Decision Support Tools',
    description: 'Create AI-powered tools that analyze data and suggest optimal decisions.',
  },
  {
    title: 'Sales Forecasting',
    description: 'Develop custom models to predict sales trends based on historical data.',
  },
  {
    title: 'Competitor Monitoring',
    description: 'Build systems that track and alert on competitor activities.',
  },
  {
    title: 'Resource Planning',
    description: 'Create dashboards and tools for optimal staffing and inventory planning.',
  },
  {
    title: 'Custom Dashboards',
    description: 'Build tailored dashboards for your team KPIs and metrics.',
  },
];

const benefits = [
  'Generate reports faster with custom-built systems',
  'Get data-driven recommendations for your business',
  'Identify opportunities unique to your market',
  'Reduce manual analysis work',
  'Have current intelligence for decision making',
  'Align team around your specific metrics',
];

export default function BusinessAutomation() {
  return (
    <SolutionPage
      title="Business Intelligence Automation"
      subtitle="Solutions"
      description="Build custom solutions that transform your sales data into automated reports and strategic decision support."
      features={features}
      benefits={benefits}
      gradientColors="from-emerald-600 to-teal-600"
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    />
  );
}