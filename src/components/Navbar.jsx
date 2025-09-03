import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'

const Navbar = () => {



  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };


  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#404040] text-white shadow-xl shadow-[#5a6bdd]/10">
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
          <Link onClick={handleScrollTop} className="li-custom" to="/services">
            Services
          </Link>
          <Button label="Contact" href="/contact" b_radius="10px" />
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
          <Button label="Contact" href="/contact" b_radius="8px" />
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
        <div className="lg:hidden bg-[#2c2c2c]/95 px-4 sm:px-6 md:px-15 py-4 space-y-4 text-lg flex flex-col">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/industries"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Industries
          </Link>
          <Link
            to="/leaderships"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Our Leadership
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Services
          </Link>
          {/* Contact Button only for mobile */}
          <div className="sm:hidden" onClick={() => setIsOpen(false)}>
            <Button label="Contact" href="/contact" b_radius="8px" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
