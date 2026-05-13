import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface SolutionFeature {
  title: string;
  description: string;
}

interface SolutionPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: SolutionFeature[];
  benefits: string[];
  gradientColors: string;
  imageUrl: string;
  secondImageUrl?: string;
}

export function SolutionPage({
  title,
  subtitle,
  description,
  features,
  benefits,
  gradientColors,
  imageUrl,
  secondImageUrl,
}: SolutionPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {description}
          </p>
          <a
            href="mailto:info@croonjob.cloud"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-80 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors} opacity-40`} />
            </div>

            {/* Second Image or Stats */}
            {secondImageUrl ? (
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={secondImageUrl}
                  alt={`${title} detail`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ) : (
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradientColors} p-8 flex flex-col justify-end`}>
                <div className="text-6xl font-bold mb-2">95%</div>
                <p className="text-gray-200">Efficiency Increase</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColors} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Why Choose Our Solution
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="size-6 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="mailto:info@croonjob.cloud"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <span>Learn more about implementation</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Gradient Card */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradientColors} p-1`}>
              <div className="bg-black rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <p className="text-gray-400 text-sm">Happy Clients</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <p className="text-gray-400 text-sm">Support Available</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <p className="text-gray-400 text-sm">Uptime SLA</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">5min</div>
                    <p className="text-gray-400 text-sm">Setup Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Build Your Solution?
          </h2>
          <p className="text-gray-400 mb-10">
            Let's discuss how we can build a custom solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@croonjob.cloud"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <span>Request Demo</span>
              <ArrowRight className="size-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-700 px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <span>View All Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}