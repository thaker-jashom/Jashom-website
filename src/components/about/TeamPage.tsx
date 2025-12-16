import { motion } from 'motion/react';
import { CircuitDivider } from '../CircuitDivider';
import { GlassCard } from '../GlassCard';
import { SEO } from '../SEO';
import { Linkedin } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export function TeamPage() {
  const teamMembers = [
    {
      name: 'Jay Dave',
      role: 'Founder',
      linkedin: null
    },
    {
      name: 'Soham Thaker',
      role: 'Tech Lead',
      linkedin: null
    },
    {
      name: 'Archana Trivedi',
      role: 'Operation Manager',
      linkedin: null
    },
    {
      name: 'Arpit',
      role: 'DevOps and Security Head (CISO)',
      linkedin: null
    },
    {
      name: 'Dhwana Gadani',
      role: 'Partner & Delivery Head',
      linkedin: null
    },
    {
      name: 'Maxime Derian',
      role: 'Partner – Europe Region',
      linkedin: null
    },
    {
      name: 'Abhishek Bhagwat',
      role: 'Sales Manager',
      linkedin: null
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Our Team | About Us | Jashom - AI Innovation Leaders"
        description="Meet the talented individuals driving innovation and excellence at Jashom."
        keywords="Jashom team, AI experts, technology leaders, company team"
      />
      
      {/* Team Section */}
      <section className="pt-24 pb-20">
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
              <span className="text-[#d1d5db]">Our Team</span>
            </motion.div>
            <h1 className="mb-4 text-gradient">Meet the Team</h1>
            <p className="text-white/70 max-w-3xl mx-auto">
              The talented individuals driving innovation and excellence at Jashom.
            </p>
          </motion.div>

          <CircuitDivider />

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <GlassCard>
                  <div className="text-center relative">
                    <h3 className="text-white mb-2 text-lg sm:text-xl">{member.name}</h3>
                    <p className="text-white/70 mb-4 text-sm sm:text-base">{member.role}</p>
                    <a
                      href={member.linkedin || '#'}
                      target={member.linkedin ? "_blank" : undefined}
                      rel={member.linkedin ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center text-[#d1d5db] hover:text-white transition-colors"
                      onClick={(e) => {
                        if (!member.linkedin) {
                          e.preventDefault();
                        }
                      }}
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

