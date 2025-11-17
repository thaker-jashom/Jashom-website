import { motion } from 'motion/react';
import { CircuitDivider } from './CircuitDivider';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export function PortfolioPage() {

  const caseStudies = [
    {
      title: 'BoostReferral - SaaS Platform',
      client: 'Jay Dave',
      industry: 'SaaS',
      category: 'SaaS Platforms',
      challenge: 'Businesses needed an automated solution to manage referral programs and drive customer acquisition efficiently.',
      solution: 'Founded and developed a comprehensive referral management platform that automates referral programs, tracks analytics, and drives customer acquisition for businesses.',
      impact: [
        'Automated referral program management',
        'Increased customer acquisition rates',
        '99.9% platform uptime',
        'Scalable SaaS architecture serving thousands of users'
      ],
      tags: ['SaaS Platform', 'Referral Management', 'Analytics', 'Automation'],
      link: 'https://jay.jashom.com/projects/boostreferral'
    },
    {
      title: 'ProjectSphere - Project Management Platform',
      client: 'Jay Dave',
      industry: 'SaaS',
      category: 'SaaS Platforms',
      challenge: 'Organizations need comprehensive project management tools that enable real-time collaboration and provide insights into team performance and project progress.',
      solution: 'ProjectSphere offers a complete project management platform with real-time collaboration, resource management, and advanced analytics for better project outcomes.',
      impact: [
        '45% improvement in team efficiency',
        '30% faster project delivery',
        '85% user adoption rate',
        'Real-time team collaboration'
      ],
      tags: ['Project Management', 'Real-time Collaboration', 'Resource Management', 'Analytics Dashboard'],
      link: 'https://jay.jashom.com/projects/projectsphere'
    },
    {
      title: 'SalesHandy Optimization - Sales Automation Platform',
      client: 'Jay Dave',
      industry: 'SaaS',
      category: 'SaaS Platforms',
      challenge: 'Sales teams struggle with manual processes, slow lead response times, and lack of automation tools to scale their operations effectively.',
      solution: 'SalesHandy Optimization provides intelligent sales automation with CRM integration, email marketing automation, and lead management to streamline sales processes.',
      impact: [
        '40% improvement in conversion rates',
        '60% faster sales efficiency',
        'Sub-5-minute lead response times',
        'Intelligent sales automation'
      ],
      tags: ['Sales Automation', 'CRM Integration', 'Email Marketing', 'Lead Management'],
      link: 'https://jay.jashom.com/projects/saleshandy-optimization'
    },
    {
      title: 'EcoComply Chatbot - Compliance Automation',
      client: 'Jay Dave',
      industry: 'AI & Machine Learning',
      category: 'SaaS Platforms',
      challenge: 'Organizations face complex regulatory compliance requirements that require significant time and resources to understand and implement correctly.',
      solution: 'EcoComply Chatbot provides AI-powered compliance automation with instant regulatory guidance and automated compliance processes.',
      impact: [
        '95% query accuracy',
        '50% cost reduction',
        'Sub-30-second response times',
        'AI-powered compliance guidance'
      ],
      tags: ['AI Chatbot', 'Compliance Automation', 'Natural Language Processing', 'Regulatory Database'],
      link: 'https://jay.jashom.com/projects/ecocomply-chatbot'
    },
    {
      title: 'EnviroPulse - Environmental Monitoring',
      client: 'Jay Dave',
      industry: 'Environmental Tech',
      category: 'Environmental Tech',
      challenge: 'Industrial facilities need real-time monitoring of environmental metrics across multiple zones, but existing solutions lack comprehensive coverage and actionable insights.',
      solution: 'EnviroPulse combines IoT sensors with advanced analytics to provide real-time monitoring and insights across multiple environmental parameters.',
      impact: [
        '35% reduction in environmental incidents',
        '45% improvement in compliance reporting efficiency',
        'Real-time environmental monitoring',
        'Multi-zone tracking capabilities'
      ],
      tags: ['IoT Integration', 'Real-time Data', 'Data Visualization', 'Environmental Sensors', 'Analytics Dashboard'],
      link: 'https://jay.jashom.com/projects/enviropulse'
    },
    {
      title: 'GreenSphere - ESG Management Platform',
      client: 'Jay Dave',
      industry: 'ESG Platform',
      category: 'Environmental Tech',
      challenge: 'Organizations struggle to track, manage, and report their ESG metrics effectively, leading to compliance risks and missed sustainability opportunities.',
      solution: 'GreenSphere provides a comprehensive platform for tracking, analyzing, and reporting ESG metrics, helping organizations achieve their sustainability goals.',
      impact: [
        '23% average reduction in carbon emissions',
        '65% improvement in ESG reporting efficiency',
        'ESG metrics tracking',
        'Sustainability reporting automation'
      ],
      tags: ['ESG Metrics', 'Sustainability Tracking', 'Reporting Tools', 'Data Visualization', 'Compliance Management'],
      link: 'https://jay.jashom.com/projects/greensphere'
    },
    {
      title: 'EcoBot AI - Sustainability Assistant',
      client: 'Jay Dave',
      industry: 'AI Platform',
      category: 'Environmental Tech',
      challenge: 'Organizations struggle to keep up with complex environmental regulations and sustainability requirements, often leading to compliance issues and missed opportunities for improvement.',
      solution: 'EcoBot AI leverages advanced language models to provide instant, accurate responses to sustainability queries, helping organizations make informed decisions and maintain compliance.',
      impact: [
        '40% reduction in compliance-related issues',
        '60% improvement in sustainability decision-making efficiency',
        'Instant sustainability query responses',
        'High accuracy LLM integration'
      ],
      tags: ['AI Integration', 'Natural Language Processing', 'Sustainability Analytics', 'Environmental Compliance', 'Real-time Analytics'],
      link: 'https://jay.jashom.com/projects/ecobot-ai'
    },
    {
      title: 'Jashom Health - Hospital System',
      client: 'Jay Dave',
      industry: 'Healthcare Platform',
      category: 'Healthcare Technology',
      challenge: 'Modern healthcare facilities face significant challenges in managing multiple locations while maintaining strict HIPAA compliance and providing real-time patient monitoring.',
      solution: 'Jashom Health provides a comprehensive hospital management system designed specifically for multi-location healthcare facilities with HIPAA-compliant security and real-time monitoring.',
      impact: [
        '99.9% system uptime ensuring continuous patient care',
        '40% reduction in administrative overhead',
        '60% improvement in patient care coordination',
        '100% HIPAA compliance with zero security incidents',
        'Supports 25+ hospital locations simultaneously'
      ],
      tags: ['HIPAA Compliance', 'Multi-location Support', 'Real-time Monitoring', 'Patient Management', 'Healthcare Analytics'],
      link: 'https://jay.jashom.com/projects/jashom-health'
    },
    {
      title: 'Jashom Healthcare - Interoperability Platform',
      client: 'Jay Dave',
      industry: 'Healthcare Interoperability',
      category: 'Healthcare Technology',
      challenge: 'Healthcare systems operate in silos, making it extremely difficult to share patient data and coordinate care across different departments and facilities.',
      solution: 'Jashom Healthcare provides seamless interoperability between healthcare systems using industry-standard protocols (HL7, FHIR) and advanced integration technology.',
      impact: [
        '99.9% system uptime ensuring continuous data flow',
        '35% reduction in duplicate patient records',
        '50+ healthcare partners successfully integrated',
        '60% faster care coordination across facilities',
        '24/7 real-time synchronization'
      ],
      tags: ['HL7 Integration', 'FHIR Standards', 'EMR/LIS/PACS', 'IoT Device Integration', 'Real-time Sync', 'HIPAA Compliance'],
      link: 'https://jay.jashom.com/projects/jashom-healthcare'
    },
    {
      title: 'Jashom ICU Connect - Remote Monitoring',
      client: 'Jay Dave',
      industry: 'Remote ICU Monitoring',
      category: 'Healthcare Technology',
      challenge: 'Rural and semi-urban hospitals often lack access to specialist care, leading to unnecessary patient transfers and delayed critical care interventions.',
      solution: 'Jashom ICU Connect provides a comprehensive remote monitoring and collaboration platform that bridges the gap between rural hospitals and specialist care.',
      impact: [
        '40% reduction in unnecessary patient transfers',
        '15+ hospitals now have specialist oversight',
        '< 30 second response time for critical alerts',
        'Improved outcomes through 24/7 specialist collaboration',
        '100% 24/7 monitoring coverage'
      ],
      tags: ['Real-time Monitoring', 'Vital Signs Tracking', 'Expert Collaboration', 'Secure Communication', 'Role-based Access', 'HIPAA Compliance'],
      link: 'https://jay.jashom.com/projects/jashom-icu-connect'
    },
    {
      title: 'Healthcare AI Diagnostics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      category: 'AI & Machine Learning',
      challenge: 'Manual diagnosis process was time-consuming and prone to human error, requiring 48+ hours for complex cases.',
      solution: 'Developed a GPU-accelerated AI platform using deep learning models for medical image analysis with real-time processing capabilities.',
      impact: [
        '92% diagnostic accuracy improvement',
        '85% reduction in processing time',
        '1M+ patients served annually'
      ],
      tags: ['AI/ML', 'Computer Vision', 'GPU Optimization']
    },
    {
      title: 'Real-time Fraud Detection System',
      client: 'SecureBank Financial',
      industry: 'FinTech',
      category: 'Smart Infrastructure',
      challenge: 'Legacy fraud detection system had high false-positive rates and couldn\'t scale with transaction volume growth.',
      solution: 'Built a real-time ML pipeline with GPU-accelerated inference, processing millions of transactions per second with adaptive learning.',
      impact: [
        '78% reduction in false positives',
        '99.7% fraud detection accuracy',
        '$50M+ in prevented losses annually'
      ],
      tags: ['Machine Learning', 'Real-time Processing', 'Security']
    },
    {
      title: 'Supply Chain Optimization Engine',
      client: 'GlobalRetail Corp',
      industry: 'Retail',
      category: 'Smart Infrastructure',
      challenge: 'Inefficient inventory management leading to stockouts and overstock situations, impacting $100M+ in revenue.',
      solution: 'Implemented AI-driven predictive analytics with multi-variable optimization algorithms for demand forecasting and inventory planning.',
      impact: [
        '35% reduction in stockouts',
        '28% decrease in excess inventory',
        '$45M annual cost savings'
      ],
      tags: ['Predictive Analytics', 'Optimization', 'Cloud']
    },
    {
      title: 'Conversational AI Assistant',
      client: 'TechSupport Inc',
      industry: 'Customer Service',
      category: 'AI & Machine Learning',
      challenge: 'Customer support team overwhelmed with 10,000+ daily queries, leading to long wait times and customer dissatisfaction.',
      solution: 'Deployed fine-tuned LLM-powered conversational AI with RAG architecture, handling complex multi-turn conversations autonomously.',
      impact: [
        '70% reduction in support tickets',
        '4.8/5 customer satisfaction score',
        '24/7 support availability'
      ],
      tags: ['LLM', 'Natural Language Processing', 'RAG']
    },
    {
      title: 'Environmental Monitoring System',
      client: 'EcoWatch Initiative',
      industry: 'Environmental',
      category: 'AI & Machine Learning',
      challenge: 'Manual monitoring of environmental data across 500+ sites was inefficient and unable to detect rapid changes.',
      solution: 'Created an edge AI system with IoT integration for real-time environmental data analysis and predictive modeling.',
      impact: [
        '95% faster anomaly detection',
        '500+ sites monitored in real-time',
        '40% reduction in monitoring costs'
      ],
      tags: ['Edge AI', 'IoT', 'Predictive Modeling']
    },
  ];

  // Group projects by category
  const categories = [
    'Environmental Tech',
    'Healthcare Technology',
    'SaaS Platforms',
    'AI & Machine Learning',
    'Smart Infrastructure'
  ];

  const groupedProjects = categories.map(category => ({
    category,
    projects: caseStudies.filter(study => study.category === category)
  }));

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <SEO
        title="Portfolio & Case Studies | AI Success Stories | NeoTeq"
        description="Real-world AI transformations: Healthcare diagnostics, fraud detection, supply chain optimization, and more. See how we've delivered $2B+ in value across 500+ projects."
        keywords="AI case studies, machine learning portfolio, AI success stories, GPU optimization results, AI implementation examples, enterprise AI projects"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full glass-effect border border-[#1E90FF]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#00FFFF]">Success Stories</span>
          </motion.div>
          <h1 className="mb-4 text-gradient">Portfolio</h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Real-world transformations powered by our AI and GPU optimization expertise.
            Discover how we've helped organizations achieve breakthrough results.
          </p>
        </motion.div>

        <CircuitDivider />

        {/* Case Studies by Category */}
        <div className="space-y-16 mt-16">
          {groupedProjects.map(({ category, projects }, categoryIndex) => (
            <div key={category} className="space-y-8">
              {/* Category Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-3xl font-bold text-gradient mb-2">{category}</h2>
                <p className="text-white/60 text-sm">{projects.length} {projects.length === 1 ? 'Project' : 'Projects'}</p>
              </motion.div>

              {/* Projects in this category */}
              {projects.map((study, index) => (
            <GlassCard key={`${category}-${index}`}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#1E90FF]/20 text-[#00FFFF] text-sm">
                      {study.industry}
                    </span>
                    <span className="text-white/50 text-sm">{study.client}</span>
                  </div>
                  <h3 className="mb-4 text-white">{study.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#1E90FF]" />
                        <span className="text-[#00FFFF]">Challenge</span>
                      </div>
                      <p className="text-white/70 text-sm pl-4">{study.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#1E90FF]" />
                        <span className="text-[#00FFFF]">Solution</span>
                      </div>
                      <p className="text-white/70 text-sm pl-4">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-[#1E90FF]/20 text-white/60 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Impact */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-[#00FFFF]" />
                    <span className="text-[#00FFFF]">Impact & Results</span>
                  </div>
                  <div className="space-y-4">
                    {study.impact.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                        <span className="text-white">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  {study.link ? (
                    <motion.a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-[#00FFFF] hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </GlassCard>
              ))}
            </div>
          ))}
        </div>

        <CircuitDivider />

        {/* Stats Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-12 text-gradient">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Retention' },
              { value: '$2B+', label: 'Value Generated' },
              { value: '50+', label: 'Industries Served' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-2 text-gradient">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <CircuitDivider />

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-12 border border-[#1E90FF]/30">
            <h2 className="mb-4 text-gradient">Ready to Write Your Success Story?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join leading organizations that have transformed their operations with NeoTeq.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-black neon-glow-hover transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
