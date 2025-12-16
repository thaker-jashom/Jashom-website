import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [clickedServiceCategory, setClickedServiceCategory] = useState<string | null>(null);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const navItems = [
    { path: '/', label: 'Home' },
    {
      label: 'About Us',
      dropdown: [
        { path: '/about/team', label: 'Team' },
        { path: '/about/portfolio', label: 'Portfolio' },
        { path: '/about/blog', label: 'Blog' },
        { path: '/about/career', label: 'Career' }
      ]
    },
    {
      label: 'Services',
      dropdown: [
        {
          label: 'AI Services',
          subItems: [
            { path: '/services/ai-gpu-optimization', label: 'AI GPU Optimization & Attestation' },
            { path: '/services/rag-applications', label: 'RAG Applications' },
            { path: '/services/ai-agentic-systems', label: 'AI Agentic Systems' },
            { path: '/services/ai-automation', label: 'AI Integration & Workflow Automation' }
          ]
        },
        {
          label: 'Cybersecurity',
          subItems: [
            { path: '/services/cyber-security', label: 'Cybersecurity' },
            { path: '/services/vapt', label: 'VAPT' },
            { path: '/services/compliance-risk', label: 'Compliance & Risk' }
          ]
        },
        {
          label: 'Cloud & DevOps Engineering',
          subItems: [
            { path: '/services/devops-devsecops', label: 'DevOps & DevSecOps' },
            { path: '/services/devops-cloud', label: 'Cloud Computing' },
            { path: '/services/edge-computing', label: 'Edge Computing' },
            { path: '/services/cicd-automation', label: 'CI/CD Automation' }
          ]
        },
        {
          label: 'Product Engineering',
          subItems: [
            { path: '/services/product-engineering', label: 'Product Engineering' },
            { path: '/services/custom-development', label: 'Custom Development' },
            { path: '/services/micro-saas', label: 'SaaS Development' }
          ]
        }
      ]
    },
    {
      label: 'AI for Industry',
      dropdown: [
        { path: '/ai-for-industry/sales', label: 'AI for Sales' },
        { path: '/ai-for-industry/legal', label: 'AI for Legal' },
        { path: '/ai-for-industry/accounting', label: 'AI for Accounting' },
        { path: '/ai-for-industry/healthcare', label: 'AI for Healthcare' },
        { path: '/ai-for-industry/marketing', label: 'AI for Marketing' },
        { path: '/ai-for-industry/rnd', label: 'AI for R&D' }
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
        { path: '/solutions/retail-tech', label: 'RetailTech' },
        { path: '/solutions/foodtech', label: 'FoodTech' }
      ]
    },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setClickedServiceCategory(null);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#333333]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/jashom-logo-header-70px.png"
                alt="Jashom"
                className="h-[35px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-auto transition-all duration-300 object-contain max-w-[120px] sm:max-w-none"
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
                    onMouseEnter={() => {
                      // Solutions and Services open on hover (desktop only)
                      if (item.label === 'Solutions' || item.label === 'Services') {
                        setActiveDropdown(item.label);
                      } else {
                        setActiveDropdown(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      // Solutions: Close on mouse leave
                      // Services: Only close dropdown if no category is clicked
                      if (item.label === 'Solutions') {
                        setActiveDropdown(null);
                      } else if (item.label === 'Services') {
                        if (clickedServiceCategory === null) {
                          setActiveDropdown(null);
                        }
                      } else {
                        setActiveDropdown(null);
                        setClickedServiceCategory(null);
                      }
                    }}
                  >
                    <button
                      onClick={() => {
                        // Services: Click to toggle dropdown (click-only, no hover)
                        if (item.label === 'Services') {
                          if (activeDropdown === item.label) {
                            // Close dropdown and reset clicked category
                            setActiveDropdown(null);
                            setClickedServiceCategory(null);
                          } else {
                            // Open dropdown
                            setActiveDropdown(item.label);
                          }
                        }
                      }}
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
                          onMouseEnter={() => {
                            // Keep Solutions dropdown open on hover
                            // Services: Keep open if category is clicked
                            if (item.label === 'Solutions') {
                              setActiveDropdown(item.label);
                            } else if (item.label === 'Services') {
                              // Keep Services dropdown open if category is clicked
                              if (clickedServiceCategory !== null) {
                                setActiveDropdown(item.label);
                              }
                            } else {
                              setActiveDropdown(item.label);
                            }
                          }}
                          onMouseLeave={() => {
                            // Solutions: Close on mouse leave
                            // Services: Only close dropdown if no category is clicked
                            if (item.label === 'Solutions') {
                              setActiveDropdown(null);
                            } else if (item.label === 'Services') {
                              if (clickedServiceCategory === null) {
                                setActiveDropdown(null);
                              }
                            } else {
                              setActiveDropdown(null);
                            }
                          }}
                          onClick={(e) => {
                            if (item.label === 'Services' && !(e.target as HTMLElement).closest('button')) {
                              e.stopPropagation();
                            }
                          }}
                          className={`absolute top-full left-0 mt-2 glass-effect rounded-xl border border-white/10 overflow-visible max-h-[80vh] overflow-y-auto z-50 ${item.label === 'About Us' ? 'w-48 xl:w-56 p-2 flex flex-col gap-2' : item.label === 'Services' ? 'w-64 xl:w-72' : 'w-56 xl:w-64'
                            }`}
                        >
                          {item.dropdown.map((subItem, subIndex) => {
                            // Check if this is a Services category with sub-items
                            const hasSubItems = (subItem as any).subItems && (subItem as any).subItems.length > 0;
                            
                            if (hasSubItems && item.label === 'Services') {
                              // Services: Click-based behavior for categories
                              const isClicked = clickedServiceCategory === subItem.label;
                              const hasClickedCategory = clickedServiceCategory !== null;
                              
                              // If a category is clicked, only show that category and its sub-items
                              // Otherwise, show all categories (hover state)
                              if (hasClickedCategory && !isClicked) {
                                return null; // Hide other categories when one is clicked
                              }
                              
                              return (
                                <div key={subItem.label || subIndex}>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      // Toggle clicked category
                                      if (clickedServiceCategory === subItem.label) {
                                        setClickedServiceCategory(null);
                                      } else {
                                        setClickedServiceCategory(subItem.label);
                                      }
                                    }}
                                    onMouseEnter={(e) => {
                                      // Prevent hover expansion - only click works
                                      e.stopPropagation();
                                    }}
                                    className={`w-full px-4 py-3 flex items-center justify-between text-white hover:bg-white/10 transition-colors cursor-pointer ${isClicked ? 'bg-white/10' : ''}`}
                                  >
                                    <span className="whitespace-nowrap">{subItem.label}</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isClicked ? 'rotate-180' : ''}`} />
                                  </button>
                                  {isClicked && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="overflow-hidden"
                                      onMouseEnter={(e) => {
                                        // Keep dropdown open when hovering over sub-items
                                        e.stopPropagation();
                                      }}
                                    >
                                      <div className="pl-4">
                                        {(subItem as any).subItems.map((subSubItem: any) => (
                                          <Link
                                            key={subSubItem.path}
                                            to={subSubItem.path}
                                            onClick={() => {
                                              handleLinkClick();
                                              // Close Services dropdown when clicking a sub-item
                                              setActiveDropdown(null);
                                              setClickedServiceCategory(null);
                                            }}
                                            className={`block px-4 py-3 transition-colors whitespace-nowrap ${location.pathname === subSubItem.path
                                              ? 'text-white bg-white/10'
                                              : 'text-white hover:bg-white/10 hover:text-white'
                                              }`}
                                          >
                                            {subSubItem.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </div>
                              );
                            }
                            
                            // Regular dropdown item
                            if (!(subItem as any).path) return null;
                            return (
                              <Link
                                key={(subItem as any).path}
                                to={(subItem as any).path}
                                onClick={handleLinkClick}
                                className={`block transition-colors ${item.label === 'AI for Industry' ? 'whitespace-nowrap' : ''} ${item.label === 'About Us' ? 'px-4 py-2 rounded-lg' : 'px-4 py-3'
                                  } ${location.pathname === (subItem as any).path
                                    ? 'text-white bg-white/10'
                                    : 'text-white hover:bg-white/10 hover:text-white'
                                  }`}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
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
            className="md:hidden text-white z-50 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle menu"
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
            <>
              {/* Overlay to close menu when clicking outside */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={handleLinkClick}
              />
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto', maxHeight: 'calc(100vh - 5rem)' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-[#333333] mt-2 relative z-50 bg-black"
                style={{ maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto' }}
              >
                <div className="pb-4 space-y-1 pt-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={menuItemVariants}
                  >
                    {item.dropdown ? (
                      <div>
                        {item.label === 'Solutions' ? (
                          <Link
                            to="/solutions"
                            onClick={handleLinkClick}
                            className={`block py-3 px-4 sm:px-6 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base font-medium ${location.pathname === '/solutions'
                              ? 'text-white bg-white/10'
                              : 'text-white hover:bg-white/10 hover:text-white'
                              }`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <div className="py-3 px-4 text-white/60 text-sm font-medium">
                            {item.label}
                          </div>
                        )}
                        {item.dropdown.map((subItem, subIndex) => {
                          const hasSubItems = (subItem as any).subItems && (subItem as any).subItems.length > 0;
                          const subMenuKey = `${item.label}-${subItem.label}-${subIndex}`;
                          
                          if (hasSubItems && item.label === 'Services') {
                            // Services: Click-based behavior for mobile - show only clicked category
                            const isOpen = openSubMenus[subMenuKey];
                            const hasOpenCategory = Object.values(openSubMenus).some(v => v === true);
                            
                            // If a category is open, only show that category and its sub-items
                            if (hasOpenCategory && !isOpen) {
                              return null; // Hide other categories when one is open
                            }
                            
                            return (
                              <div key={subItem.label || subIndex}>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // Close all other service categories, toggle this one
                                    const newState: { [key: string]: boolean } = {};
                                    if (!isOpen) {
                                      newState[subMenuKey] = true;
                                    }
                                    setOpenSubMenus(newState);
                                  }}
                                  className={`w-full py-3 px-6 sm:px-8 rounded-lg transition-all min-h-[44px] flex items-center justify-between text-sm sm:text-base text-white hover:bg-white/10 ${isOpen ? 'bg-white/10' : ''}`}
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isOpen && (
                                  <div className="pl-4">
                                    {(subItem as any).subItems.map((subSubItem: any) => (
                                      <Link
                                        key={subSubItem.path}
                                        to={subSubItem.path}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleLinkClick();
                                        }}
                                        className={`block py-3 px-6 sm:px-8 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base ${location.pathname === subSubItem.path
                                          ? 'text-white bg-white/10'
                                          : 'text-white hover:bg-white/10 hover:text-white'
                                          }`}
                                      >
                                        {subSubItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }
                          
                          if (!(subItem as any).path) return null;
                          return (
                            <Link
                              key={(subItem as any).path}
                              to={(subItem as any).path}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLinkClick();
                              }}
                              className={`block py-3 px-6 sm:px-8 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base ${item.label === 'AI for Industry' ? 'whitespace-nowrap' : ''} ${location.pathname === (subItem as any).path
                                ? 'text-white bg-white/10'
                                : 'text-white hover:bg-white/10 hover:text-white'
                                }`}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`block py-3 px-4 sm:px-6 rounded-lg transition-all min-h-[44px] flex items-center text-sm sm:text-base ${location.pathname === item.path
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
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
