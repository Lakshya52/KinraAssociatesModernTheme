import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const timeoutRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Flyout menu handlers
  const handleFlyoutEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowServices(true);
  }, []);

  const handleFlyoutLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setShowServices(false), 200);
  }, []);

  // Scroll handler for homepage
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <nav
      className={`${isHome ? "fixed" : "sticky"}  top-0 z-50 w-full transition-all duration-300 text-white 
      ${isScrolled ? "bg-[#2b3780] shadow-xl" : ""} ${isOpen ? "bg-[#2b3780]" : ""}`}
    >
      <div
        className={`flex justify-between items-center mx-4 sm:mx-6 md:mx-15 py-5 ${isScrolled ? "" : "border-b border-gray-300"
          }`}
      >
        {/* Logo */}
        <div>
          <Link
            to="/"
            onClick={() => { handleScrollTop(); setIsHome(true); setIsScrolled(false); }}
            className="outline-none focus:outline-none mt-20"
          >
            <p className="text-2xl md:text-2xl font-playfair-display font-extrabold">
              Kinra & Associates
            </p>
            <p className="text-sm md:text-md font-playfair-display font-extrabold">
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
          <Link
            onClick={handleScrollTop}
            className="li-custom"
            to="/leaderships"
          >
            Our Leadership
          </Link>
          <Link
            to="/services"
            className="li-custom"
            onClick={handleScrollTop}
            onMouseEnter={handleFlyoutEnter}
            onMouseLeave={handleFlyoutLeave}
          >
            Services
          </Link>

          {showServices && (
            <ul
              className="fixed top-[80px] left-4/5 -translate-x-1/2 min-w-[350px] z-[3000] p-2 shadow-xl 
              rounded-md bg-green-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100"
              onMouseEnter={handleFlyoutEnter}
              onMouseLeave={handleFlyoutLeave}
            >
              {flyoutLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-800 hover:text-white rounded hover:bg-[#2a8890] flex items-center text-lg p-2 px-4 w-full"
                    onClick={() => {
                      setShowServices(false);
                      handleScrollTop();
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <Button
            label="Contact Us"
            href="/contact"
            onClick={handleScrollTop}
          />
        </ul>

        {/* Tablet Nav */}
        <div className="hidden sm:flex lg:hidden items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Button
            label="Contact Us"
            href="/contact"
            onClick={() => {
              handleScrollTop();
              setIsOpen(false);
            }}
          />
        </div>

        {/* Mobile Nav */}
        <div className="flex sm:hidden items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className={`lg:hidden bg-[#142172]/90 px-4 sm:px-6 md:px-15 py-4 space-y-4 text-lg flex flex-col`}>
          <Link
            to="/about"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            Industries
          </Link>
          <Link
            to="/leaderships"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            Our Leadership
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            Services
          </Link>

          {/* Mobile-only Contact */}
          <div
            className="sm:hidden"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
          >
            <Button label="Contact Us" href="/contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
