import { SolutionPage } from '@/components/solutions/SolutionPage';

const features = [
  {
    title: 'Custom Document Parsing',
    description: 'Build solutions to extract structured data from invoices, contracts, and forms.',
  },
  {
    title: 'Multi-Format Support',
    description: 'Process PDFs, images, scanned documents, and handwritten notes.',
  },
  {
    title: 'Entity Recognition',
    description: 'Create custom models to identify key data points in your documents.',
  },
  {
    title: 'Classification System',
    description: 'Build automated document categorization based on your specific needs.',
  },
  {
    title: 'Search & Retrieval',
    description: 'Develop semantic search capabilities across your document archive.',
  },
  {
    title: 'Compliance Tools',
    description: 'Create systems for audit preparation and regulatory reporting.',
  },
];

const benefits = [
  'Reduce document processing time',
  'Minimize manual data entry',
  'Find information across documents instantly',
  'Build automated compliance reporting',
  'Secure document storage with access controls',
  'Tailor solutions to your specific workflows',
];

export default function DocumentIntelligence() {
  return (
    <SolutionPage
      title="Document Intelligence"
      subtitle="Solutions"
      description="Build custom solutions that read, understand, and extract valuable insights from any document type."
      features={features}
      benefits={benefits}
      gradientColors="from-amber-600 to-orange-600"
      imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      secondImageUrl="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    />
  );
}