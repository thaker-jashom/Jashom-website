import { motion } from 'motion/react';
import { CircuitDivider } from './CircuitDivider';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface DetailLayoutProps {
  title: string;
  description: string;
  whatWeOffer: string[];
  benefits: string[]; // This can also map to "We Solve" for solutions
  benefitsTitle?: string; // Defaults to "Benefits"
  type: 'Service' | 'Solution';
}

export function DetailLayout({
  title,
  description,
  whatWeOffer,
  benefits,
  benefitsTitle = 'Benefits',
  type
}: DetailLayoutProps) {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title={`${title} | Jashom ${type}`}
        description={description}
        keywords={`${title}, ${type}, Jashom AI, Services, Solutions`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db]">{type === 'Service' ? 'Our Services' : 'Our Solutions'}</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">{title}</h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            {description}
          </p>
        </motion.div>

        <CircuitDivider />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* What We Offer Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h2 className="text-2xl text-white mb-6 border-b border-[#333333] pb-4">
                {type === 'Service' ? 'What We Offer' : 'We Solve'}
              </h2>
              <div className="space-y-4">
                {whatWeOffer.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
                    <span className="text-white/80 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h2 className="text-2xl text-white mb-6 border-b border-[#333333] pb-4">
                {benefitsTitle}
              </h2>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#d1d5db]/10 flex items-center justify-center flex-shrink-0 border border-[#d1d5db]/30">
                      <div className="w-2 h-2 rounded-full bg-[#d1d5db]" />
                    </div>
                    <span className="text-white/80 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <CircuitDivider />

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="mb-4 text-gradient">Ready to Get Started?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Transform your business with our expert {type === 'Service' ? 'services' : 'solutions'}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black transition-all duration-300 hover:scale-105 font-medium"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
