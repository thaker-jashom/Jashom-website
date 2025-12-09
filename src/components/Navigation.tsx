import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
};

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    {
      label: 'About Us',
      dropdown: [
        { path: '/blog', label: 'Blog' },
        { path: '/careers', label: 'Career' }
      ]
    },
    {
      label: 'Services',
      dropdown: [
        { path: '/services/ai-gpu-optimization', label: 'AI GPU Optimization & Attestation' },
        { path: '/services/rag-applications', label: 'RAG Applications' },
        { path: '/services/devops-devsecops', label: 'DevOps & DevSecOps' },
        { path: '/services/devops-cloud', label: 'Cloud Computing' },
        { path: '/services/cyber-security', label: 'Cybersecurity' },
        { path: '/services/product-engineering', label: 'Product Engineering' },
        { path: '/services/staff-augmentation', label: 'Staff Augmentation' },
        { path: '/services/ai-agentic-systems', label: 'AI Agentic Systems' },
        { path: '/services/ai-automation', label: 'AI & Automation' },
        { path: '/services/capability-matrix', label: 'Capability Matrix' }
      ]
    },
    {
      label: 'Solutions',
      dropdown: [
        { path: '/solutions/healthtech', label: 'HealthTech' },
        { path: '/solutions/supply-chain', label: 'Supply Chain' },
        { path: '/solutions/fintech', label: 'FinTech' },
        { path: '/solutions/environmenttech', label: 'EnvironmentTech' },
        { path: '/solutions/legal-and-tax', label: 'Legal & Tax' },
        { path: '/solutions/retail-tech', label: 'Retail Tech' },
        { path: '/solutions/foodtech', label: 'FoodTech' }
      ]
    },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#333333]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/jashom-logo-header-70px.png"
                alt="Jashom"
                className="h-[40px] md:h-[70px] w-auto transition-all duration-300 object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.label}
                      </motion.span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className={`absolute top-full left-0 mt-2 glass-effect rounded-xl border border-white/10 overflow-hidden max-h-[80vh] overflow-y-auto ${item.label === 'About Us' ? 'w-48 p-2 flex flex-col gap-2' : 'w-64'
                            }`}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={handleLinkClick}
                              className={`block transition-colors ${item.label === 'About Us' ? 'px-4 py-2 rounded-lg' : 'px-4 py-3'
                                } ${location.pathname === subItem.path
                                  ? 'text-white bg-white/10'
                                  : 'text-white hover:bg-white/10 hover:text-white'
                                }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative transition-colors ${location.pathname === item.path
                      ? 'text-white'
                      : 'text-white hover:text-gray-300'
                      }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={menuItemVariants}
                  >
                    {item.dropdown ? (
                      <div>
                        <div className="py-3 px-4 text-white/60 text-sm font-medium">
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={handleLinkClick}
                            className={`block py-3 px-6 rounded-lg transition-all min-h-[44px] flex items-center ${location.pathname === subItem.path
                              ? 'text-white bg-white/10'
                              : 'text-white hover:bg-white/10 hover:text-white'
                              }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`block py-3 px-4 rounded-lg transition-all min-h-[44px] flex items-center ${location.pathname === item.path
                          ? 'text-white bg-white/10'
                          : 'text-white hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
