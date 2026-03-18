import React, { useEffect, useRef, lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// AOS import
import AOS from "aos";
import "aos/dist/aos.css";

// common components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// main pages - eagerly load landing and navbar
import Landing from './pages/Landing.jsx'
import ErrorPage from "./pages/ErrorPage.jsx";

// Lazy load other pages for code splitting
const About = lazy(() => import('./pages/About.jsx'));
const Industries = lazy(() => import('./pages/Industries.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const LeadershipsWithPhoto = lazy(() => import('./pages/LeadershipsWithPhoto.jsx'));

// Lazy load services pages
const Accounting = lazy(() => import('./pages/ServicesPages/AccountingPage.jsx'));
const AuditAndAssurance = lazy(() => import('./pages/ServicesPages/AuditAndAssurancePage.jsx'));
const BusinessAdvisory = lazy(() => import('./pages/ServicesPages/BusinessAdvisoryPage.jsx'));
const ComplianceSupport = lazy(() => import('./pages/ServicesPages/ComplianceSupportPage.jsx'));
const DirectIndirectTax = lazy(() => import('./pages/ServicesPages/DirectIndirectTaxAdvisoryPage.jsx'));
const SpecializedServices = lazy(() => import('./pages/ServicesPages/SpecializedServicePage.jsx'));

// Lazy load footer pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const Disclamer = lazy(() => import('./pages/Disclamer.jsx'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-4 border-[#2b3780] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const App = () => {
  const [aosInitialized, setAosInitialized] = useState(false);

  // Lazy initialize AOS (animate on scroll) - only when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!aosInitialized && window.scrollY > 100) {
        AOS.init({
          duration: 800,  // Animation duration (ms)
          once: false,     // Animatation once?
          offset: 120,    // Triggers animation before reaching element
        });
        setAosInitialized(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Also initialize AOS after 2 seconds if user hasn't scrolled yet
    const timeoutId = setTimeout(() => {
      if (!aosInitialized) {
        AOS.init({
          duration: 800,
          once: false,
          offset: 120,
        });
        setAosInitialized(true);
      }
    }, 2000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [aosInitialized]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* main routes */}
            <Route path='/' element={<Landing />} /> {/* landing */}
            <Route path="/about" element={<About />} />{/* about */}
            <Route path="/industries" element={<Industries />} />{/* industries */}
            <Route path="/leaderships" element={<LeadershipsWithPhoto />} />{/* leaderships */}
            <Route path="/services" element={<Services />} />{/* services */}
            <Route path="/contact" element={<Contact />} />{/* contact */}

            {/* services pages Routes */}
            <Route path='/accounting' element={<Accounting />} /> {/* accounting page */}
            <Route path='/audit_and_assurance' element={<AuditAndAssurance />} /> {/* audit and assurance */}
            <Route path='/business_advisory' element={<BusinessAdvisory />} /> {/* business advisory */}
            <Route path='/compliance_support' element={<ComplianceSupport />} /> {/* compliance support */}
            <Route path='/direct_indirect_tax' element={<DirectIndirectTax />} /> {/* direct and indirect tax adivsory */}
            <Route path='/specialized_services' element={<SpecializedServices />} /> {/* speciallized services */}

            {/* footer links routes */}
            <Route path='/privacy_policy' element={<PrivacyPolicy />} />
            <Route path='/terms_and_conditions' element={<Terms />} />
            <Route path='/legal_disclamer' element={<Disclamer />} />

            {/* Catch-all 404 error route - MUST be last */}
            <Route path='*' element={<ErrorPage />} /> {/* Error Page - handles all unmatched routes */}

          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App  