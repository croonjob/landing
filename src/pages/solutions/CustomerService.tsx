import { SolutionPage } from '@/components/solutions/SolutionPage';

const features = [
  {
    title: 'Custom Chatbot Development',
    description: 'Build intelligent chatbots tailored to your brand voice and customer needs using LLM technology.',
  },
  {
    title: 'Multi-Channel Integration',
    description: 'Connect WhatsApp, website chat, email, and social media in one unified system.',
  },
  {
    title: 'Sentiment Analysis',
    description: 'Detect customer emotions and automatically escalate to human agents when needed.',
  },
  {
    title: 'Knowledge Base Setup',
    description: 'Create and maintain a dynamic knowledge base that improves over time.',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track conversation metrics, resolution rates, and customer satisfaction.',
  },
  {
    title: 'Multi-Language Support',
    description: 'Build chatbots that understand and respond in multiple languages.',
  },
];

const benefits = [
  'Reduce response time from hours to seconds',
  'Handle more inquiries without increasing team size',
  'Maintain consistent brand voice across all channels',
  'Seamless handoff to human agents when needed',
  'Continuous learning from customer interactions',
  'Integrate with your existing CRM and tools',
];

export default function CustomerService() {
  return (
    <SolutionPage
      title="AI-Powered Customer Service"
      subtitle="Solutions"
      description="Build intelligent customer support solutions with AI chatbots that understand, respond, and improve over time."
      features={features}
      benefits={benefits}
      gradientColors="from-purple-600 to-blue-600"
      imageUrl="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80"
      secondImageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    />
  );
}