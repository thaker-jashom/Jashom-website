import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CircuitDivider } from '../CircuitDivider';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { TrendingUp, Scale, Calculator, Heart, Megaphone, FlaskConical, ArrowRight } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12
    }
  }
};

export function AIForIndustryPage() {
  const industries = [
    {
      icon: TrendingUp,
      title: 'AI for Sales',
      path: '/ai-for-industry/sales',
      description: 'Enhance your sales team\'s performance with AI-powered insights, lead qualification, and personalized client interactions.',
      features: ['Lead Qualification', 'Sales Forecasting', 'Client Personalization']
    },
    {
      icon: Scale,
      title: 'AI for Legal',
      path: '/ai-for-industry/legal',
      description: 'Streamline legal workflows with AI-driven tools for efficient research, document analysis, and compliance management.',
      features: ['Legal Research', 'Document Analysis', 'Compliance Management']
    },
    {
      icon: Calculator,
      title: 'AI for Accounting',
      path: '/ai-for-industry/accounting',
      description: 'Automate accounting processes with AI to improve accuracy, efficiency, and compliance in financial operations.',
      features: ['Automated Reconciliation', 'Tax Filing', 'Financial Reporting']
    },
    {
      icon: Heart,
      title: 'AI for Healthcare',
      path: '/ai-for-industry/healthcare',
      description: 'Improve patient care with AI-powered tools for diagnostics, patient management, and administrative workflows.',
      features: ['Diagnostic Support', 'Patient Management', 'Administrative Automation']
    },
    {
      icon: Megaphone,
      title: 'AI for Marketing',
      path: '/ai-for-industry/marketing',
      description: 'Optimize marketing campaigns with AI-driven insights, content personalization, and performance analytics.',
      features: ['Predictive Analytics', 'Content Automation', 'Budget Optimization']
    },
    {
      icon: FlaskConical,
      title: 'AI for R&D',
      path: '/ai-for-industry/rnd',
      description: 'Accelerate innovation with AI-powered research tools, automated data analysis, and enhanced collaboration capabilities.',
      features: ['Research Automation', 'Data Analysis', 'Collaboration Tools']
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="AI for Industry | Industry-Specific AI Solutions | Jashom"
        description="Transform your industry with tailored AI solutions for Sales, Legal, Accounting, Healthcare, Marketing, and R&D. Drive efficiency and innovation."
        keywords="AI for industry, AI for sales, AI for legal, AI for accounting, AI for healthcare, AI for marketing, AI for R&D"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full glass-effect border border-[#ffffff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#d1d5db]">Industry Solutions</span>
          </motion.div>
          <h1 className="mb-6 text-gradient">AI for Industry</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Transforming industries through innovative AI solutions tailored to your specific needs. 
            Discover how AI can revolutionize your business operations and drive growth.
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Industries Grid */}
        <section className="py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Link to={industry.path}>
                  <GlassCard delay={index * 0.1}>
                    <div className="h-full flex flex-col">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-4"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <industry.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <h3 className="text-white mb-3 text-xl font-semibold">{industry.title}</h3>
                      <p className="text-white/70 text-sm mb-4 flex-grow">{industry.description}</p>

                      <div className="space-y-2 mb-4">
                        {industry.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#d1d5db] mt-1.5 flex-shrink-0" />
                            <span className="text-white/60 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-3xl p-20 md:p-24 border border-[#ffffff]/30">
            <h2 className="mb-8 text-white text-2xl font-bold">Ready to Transform Your Industry?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with our team to discover how our AI solutions can revolutionize your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent text-white hover:bg-white/10 transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

