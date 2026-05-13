import { SolutionPage } from '@/components/solutions/SolutionPage';

const features = [
  {
    title: 'Unified Data Architecture',
    description: 'Build systems that combine structured and unstructured data for comprehensive analytics.',
  },
  {
    title: 'Real-Time Processing',
    description: 'Create pipelines for streaming data and instant insights.',
  },
  {
    title: 'Scalable Storage',
    description: 'Design cloud-native storage that grows with your needs.',
  },
  {
    title: 'Data Governance',
    description: 'Build security, access controls, and audit trails for your data.',
  },
  {
    title: 'ML Integration',
    description: 'Create infrastructure optimized for machine learning workloads.',
  },
  {
    title: 'Self-Healing Pipelines',
    description: 'Build intelligent data pipelines that detect and fix issues.',
  },
];

const benefits = [
  'Create a single source of truth for your data',
  'Break down data silos across teams',
  'Enable real-time analytics and reporting',
  'Build cost-effective data infrastructure',
  'Faster insights for your data team',
  'Build with compliance in mind from the start',
];

export default function DataLakehouse() {
  return (
    <SolutionPage
      title="Data Lakehouse"
      subtitle="Solutions"
      description="Build modern data architecture that combines the scalability of data lakes with the reliability of data warehouses."
      features={features}
      benefits={benefits}
      gradientColors="from-cyan-600 to-blue-600"
      imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      secondImageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
    />
  );
}