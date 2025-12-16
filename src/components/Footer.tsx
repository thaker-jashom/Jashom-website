import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: 'About Us', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Career', path: '/careers' }
    ],
    services: [
      { label: 'AI GPU Optimization & Attestation', path: '/services/ai-gpu-optimization' },
      { label: 'RAG Applications', path: '/services/rag-applications' },
      { label: 'AI Agentic Systems', path: '/services/ai-agentic-systems' },
      { label: 'Cybersecurity', path: '/services/cyber-security' },
      { label: 'DevOps & DevSecOps', path: '/services/devops-devsecops' },
      { label: 'Cloud Computing', path: '/services/devops-cloud' },
      { label: 'Product Engineering', path: '/services/product-engineering' }
    ],
    solutions: [
      { label: 'HealthTech', path: '/solutions/healthtech' },
      { label: 'Supply Chain', path: '/solutions/supply-chain' },
      { label: 'FinTech', path: '/solutions/fintech' },
      { label: 'EnvironmentTech', path: '/solutions/environmenttech' },
      { label: 'Legal & Tax', path: '/solutions/legal-and-tax' },
      { label: 'RetailTech', path: '/solutions/retail-tech' },
      { label: 'FoodTech', path: '/solutions/foodtech' }
    ],
    resources: [
      { label: 'Company Brochure', path: '/brochure' },
      { label: 'Documentation', path: '/docs' },
      { label: 'Case Studies', path: '/portfolio' },
      { label: 'Contact Us', path: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Security', path: '/security' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/neoteq', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/neoteq', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/neoteq', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/neoteq', label: 'YouTube' }
  ];

  return (
    <footer className="bg-black border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/jashom-logo-header-70px.png"
                  alt="Jashom"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-white/70 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Pioneering AI and GPU optimization solutions that transform businesses across industries.
              Empowering innovation through cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <a href="mailto:info@jashom.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs sm:text-sm break-all">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>info@jashom.com</span>
              </a>
              <a href="tel:+919023906363" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+91 90239 06363</span>
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm">414, Satyam-2, Amba Business Park,<br />ATPL, Adalaj, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white mb-3 sm:mb-4 font-semibold text-sm sm:text-base">About</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm break-words">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Solutions</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm break-words">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            <div>
              <h3 className="text-white mb-2 font-semibold text-lg sm:text-xl">Stay Updated</h3>
              <p className="text-white/70 text-sm sm:text-base">Get the latest insights on AI, GPU optimization, and industry trends.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-black border border-[#333333] text-white placeholder-white/40 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm sm:text-base"
              />
              <motion.button
                className="px-6 py-3 rounded-xl bg-black border border-white text-white hover:bg-white hover:text-black transition-colors whitespace-nowrap font-medium text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Copyright */}
          <div className="text-white/60 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Jashom. All rights reserved. Built with AI-powered excellence.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black border border-[#333333] flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="mt-8 pt-8 border-t border-[#333333]">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span>Enterprise Grade Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
