import React, { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// AOS import
import AOS from "aos";
import "aos/dist/aos.css";

// common components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// main pages
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Industries from './pages/Industries.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

// others
import LeadershipsWithPhoto from './pages/LeadershipsWithPhoto.jsx';

// services pages
import Accounting from './pages/ServicesPages/AccountingPage.jsx'
import AuditAndAssurance from './pages/ServicesPages/AuditAndAssurancePage.jsx'
import BusinessAdvisory from './pages/ServicesPages/BusinessAdvisoryPage.jsx'
import ComplianceSupport from './pages/ServicesPages/ComplianceSupportPage.jsx'
import DirectIndirectTax from './pages/ServicesPages/DirectIndirectTaxAdvisoryPage.jsx'
import SpecializedServices from './pages/ServicesPages/SpecializedServicePage.jsx'

// footer links pages
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import Disclamer from './pages/Disclamer.jsx';


const App = () => {

  // initized AOS (animate on scroll) used for some basic animations
  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation duration (ms)
      once: false,     // Animatation once?
      offset: 120,    // Triggers animation before reaching element
    });
  }, []);


  return (
    <>
      <BrowserRouter>
        <Navbar />
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

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App  