import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const keywords = [
  { text: 'AI/ML', color: 'text-purple-500' },
  { text: 'Data Center', color: 'text-purple-500' },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-60"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.opacity = '0';
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Hero Content - Left aligned */}
      <div className="relative h-full flex flex-col items-start justify-end px-6 pb-24 md:pb-32 lg:px-8">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Headline */}
          <div className="text-left">
            <h2 className="text-white max-md:text-[28px] max-md:leading-[30px] md:text-[4rem] md:leading-[1.05] font-light tracking-tight">
              Integrate your business with <span className={cn("font-medium", keywords[currentIndex].color)}>{keywords[currentIndex].text}</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-white/80 text-base md:text-lg font-light leading-relaxed text-left max-w-2xl mt-6">
            Transform your operations with intelligent automation, LLM-powered chatbots, and custom Web Application
          </p>

          {/* CTA Button */}
          <Link
            to="mailto:info@croonjob.com"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-white hover:bg-white/10 transition-all duration-300 mt-6 w-fit"
          >
            <span className="text-sm font-medium">Request Demo</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}