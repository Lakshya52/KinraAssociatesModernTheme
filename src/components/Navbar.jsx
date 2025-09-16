import React, { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'


const flyoutLinks = [
  { to: "/accounting", label: "Accounting & Financial Reporting" },
  { to: "/business_advisory", label: "Business Advisory" },
  { to: "/audit_and_assurance", label: "Audit and Assurance" },
  { to: "/direct_indirect_tax", label: "Direct & Indirect Tax Advisory" },
  { to: "/compliance_support", label: "Regulatory & Compliance Support" },
  { to: "/specialized_services", label: "Specialized Advisory Services" },
];

const Navbar = () => {


  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const timeoutRef = useRef(null);

  const handleFlyoutEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowServices(true);
  }, []);

  const handleFlyoutLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setShowServices(false), 200);
  }, []);



  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };


  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#142172]/90 text-white shadow-xl shadow-[#5a6bdd]/10">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-15 py-5">
        {/* Logo */}
        <div>
          <Link onClick={handleScrollTop} to="/" className="outline-none focus:outline-none">
            <p className="text-2xl md:text-3xl font-playfair-display font-extrabold">
              Kinra & Associates
            </p>
            <p className="text-sm md:text-lg font-playfair-display font-extrabold">
              Chartered Accountants
            </p>
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-10 text-lg items-center">
          <Link onClick={handleScrollTop} className="li-custom" to="/about">
            About Us
          </Link>
          <Link onClick={handleScrollTop} className="li-custom" to="/industries">
            Industries
          </Link>
          <Link onClick={handleScrollTop} className="li-custom" to="/leaderships">
            Our Leadership
          </Link>
          <Link onClick={handleScrollTop} className="li-custom hover:" to="/services" onMouseEnter={handleFlyoutEnter}
            onMouseLeave={handleFlyoutLeave}>
            Services
          </Link>
          {showServices && (
            <ul
              className="fixed top-[80px] mt-5 left-4/5 -translate-x-1/2 min-w-[350px] z-[3000] p-2 shadow-xl bg-green-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100"
              onMouseEnter={handleFlyoutEnter}
              onMouseLeave={handleFlyoutLeave}
            >
              {flyoutLinks.map(link => (
                <li key={link.to} className="flex flex-col justify-center items-start text-left">
                  <Link
                    to={link.to}
                    className="text-slate-800 hover:text-white rounded hover:bg-[#2a8890] flex items-center text-lg p-2 px-4 w-full"
                    onClick={() => {
                      setShowServices(false);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Button label="Contact Us" href="/contact" b_radius="10px" />
        </ul>

        {/* Tablet Only (sm–lg) */}
        <div className="hidden sm:flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* Contact inline for tablets */}
          <Button label="Contact Us" href="/contact" b_radius="8px" />
        </div>

        {/* Mobile Only (<sm) */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#142172]/90 px-4 sm:px-6 md:px-15 py-4 space-y-4 text-lg flex flex-col">
          <Link
            to="/about"
            onClick={() => { setIsOpen(false), handleScrollTop() }}
            className="hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/industries"
            onClick={() => { setIsOpen(false), handleScrollTop() }}
            className="hover:underline"
          >
            Industries
          </Link>
          <Link
            to="/leaderships"
            onClick={() => { setIsOpen(false), handleScrollTop() }}
            className="hover:underline"
          >
            Our Leadership
          </Link>
          <Link
            to="/services"
            onClick={() => { setIsOpen(false), handleScrollTop() }}
            className="hover:underline"
          >
            Services
          </Link>

          {/* Contact Button only for mobile */}
          <div className="sm:hidden" onClick={() => { setIsOpen(false), handleScrollTop() }}>
            <Button label="Contact Us" href="/contact" b_radius="8px" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
