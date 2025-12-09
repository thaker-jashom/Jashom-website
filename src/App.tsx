import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { SolutionsPage } from './components/SolutionsPage';
import { CapabilityMatrixPage } from './components/CapabilityMatrixPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactPage } from './components/ContactPage';
import { BrochurePage } from './components/BrochurePage';
import { PlaceholderPage } from './components/PlaceholderPage';
import { PageTransition } from './components/PageTransition';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatePresence } from 'motion/react';
import { AIAutomationPage } from './components/services/AIAutomationPage';
import { AIGPUOptimizationPage } from './components/services/AIGPUOptimizationPage';
import { RAGApplicationsPage } from './components/services/RAGApplicationsPage';
import { DevOpsCloudPage } from './components/services/DevOpsCloudPage';
import { DevSecOpsPage } from './components/services/DevSecOpsPage';
import { DevOpsDevSecOpsPage } from './components/services/DevOpsDevSecOpsPage';
import { VAPTPage } from './components/services/VAPTPage';
import { ProductEngineeringPage } from './components/services/ProductEngineeringPage';
import { StaffAugmentationPage } from './components/services/StaffAugmentationPage';
import { AIAgenticPage } from './components/services/AIAgenticPage';
import { CustomDevelopmentPage } from './components/services/CustomDevelopmentPage';
import { CyberSecurityPage } from './components/services/CyberSecurityPage';
import { HealthTechPage } from './components/solutions/HealthTechPage';
import { FoodTechPage } from './components/solutions/FoodTechPage';
import { EnvironmentTechPage } from './components/solutions/EnvironmentTechPage';
import { RetailTechPage } from './components/solutions/RetailTechPage';
import { SupplyChainPage } from './components/solutions/SupplyChainPage';
import { FinTechPage } from './components/solutions/FinTechPage';
import { LegalTaxPage } from './components/solutions/LegalTaxPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><SolutionsPage /></PageTransition>} />
        <Route path="/capability" element={<PageTransition><CapabilityMatrixPage /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/brochure" element={<PageTransition><BrochurePage /></PageTransition>} />

        {/* Service Routes */}
        <Route path="/services/ai-automation" element={<PageTransition><AIAutomationPage /></PageTransition>} />
        <Route path="/services/ai-gpu-optimization" element={<PageTransition><AIGPUOptimizationPage /></PageTransition>} />
        <Route path="/services/rag-applications" element={<PageTransition><RAGApplicationsPage /></PageTransition>} />
        <Route path="/services/devops-cloud" element={<PageTransition><DevOpsCloudPage /></PageTransition>} />
        <Route path="/services/devops-devsecops" element={<PageTransition><DevOpsDevSecOpsPage /></PageTransition>} />
        <Route path="/services/devsecops" element={<PageTransition><DevSecOpsPage /></PageTransition>} />
        <Route path="/services/vapt" element={<PageTransition><VAPTPage /></PageTransition>} />
        <Route path="/services/product-engineering" element={<PageTransition><ProductEngineeringPage /></PageTransition>} />
        <Route path="/services/staff-augmentation" element={<PageTransition><StaffAugmentationPage /></PageTransition>} />
        <Route path="/services/ai-agentic-systems" element={<PageTransition><AIAgenticPage /></PageTransition>} />
        <Route path="/services/custom-development" element={<PageTransition><CustomDevelopmentPage /></PageTransition>} />
        <Route path="/services/cyber-security" element={<PageTransition><CyberSecurityPage /></PageTransition>} />
        <Route path="/services/cloud-computing" element={<PageTransition><DevOpsCloudPage /></PageTransition>} />
        <Route path="/services/devops" element={<PageTransition><DevOpsCloudPage /></PageTransition>} />
        <Route path="/services/capability-matrix" element={<PageTransition><CapabilityMatrixPage /></PageTransition>} />

        {/* Solution Routes */}
        <Route path="/solutions/healthtech" element={<PageTransition><HealthTechPage /></PageTransition>} />
        <Route path="/solutions/foodtech" element={<PageTransition><FoodTechPage /></PageTransition>} />
        <Route path="/solutions/environmenttech" element={<PageTransition><EnvironmentTechPage /></PageTransition>} />
        <Route path="/solutions/retail-tech" element={<PageTransition><RetailTechPage /></PageTransition>} />
        <Route path="/solutions/supply-chain" element={<PageTransition><SupplyChainPage /></PageTransition>} />
        <Route path="/solutions/fintech" element={<PageTransition><FinTechPage /></PageTransition>} />
        <Route path="/solutions/legal-and-tax" element={<PageTransition><LegalTaxPage /></PageTransition>} />

        {/* Placeholder routes */}
        <Route path="/about" element={<PageTransition><PlaceholderPage title="About Us" description="Learn more about Jashom's mission, vision, and the team driving AI innovation across industries." /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><PlaceholderPage title="Careers" description="Join our world-class team of AI engineers and data scientists. Build the future of AI optimization with Jashom." /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><PlaceholderPage title="Blog" description="Stay updated with the latest insights, trends, and best practices in AI, machine learning, and GPU optimization." /></PageTransition>} />
        <Route path="/news" element={<PageTransition><PlaceholderPage title="News" description="Read the latest news, announcements, and press releases from Jashom." /></PageTransition>} />
        <Route path="/docs" element={<PageTransition><PlaceholderPage title="Documentation" description="Technical documentation, API references, and implementation guides for Jashom's AI solutions." /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><PlaceholderPage title="Resources" description="Access whitepapers, research papers, and technical resources from Jashom's AI experts." /></PageTransition>} />
        <Route path="/api" element={<PageTransition><PlaceholderPage title="API Reference" description="Complete API documentation and integration guides for Jashom's AI platform." /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PlaceholderPage title="Privacy Policy" description="Jashom's commitment to protecting your privacy and data security." /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><PlaceholderPage title="Terms of Service" description="Terms and conditions for using Jashom's services and platforms." /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><PlaceholderPage title="Cookie Policy" description="Information about how Jashom uses cookies and similar technologies." /></PageTransition>} />
        <Route path="/security" element={<PageTransition><PlaceholderPage title="Security" description="Learn about Jashom's enterprise-grade security practices and compliance certifications." /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
