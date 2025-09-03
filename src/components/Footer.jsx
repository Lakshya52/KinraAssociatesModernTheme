import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-sm bg-[#2c2c2c]/90 text-white">

      {/* Footer Main */}
      <footer className="w-full flex items-center justify-center">
        {/* content wrapper */}
        <div className="w-full  px-4 sm:px-6 md:px-15 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" onClick={handleScrollTop} className="mb-5 block">
              <p className="font-light font-playfair-display text-2xl sm:text-3xl">Kinra & Associates</p>
              <p className="font-light font-playfair-display text-base sm:text-lg">Chartered Accountants</p>
            </Link>
            <p className="text-xs sm:text-sm md:text-md font-light text-justify max-w-[450px]">
              We understand the critical role that expert financial guidance plays in achieving success in today’s dynamic economic landscape.
              Our CA firm is dedicated to delivering financial and advisory services that empower businesses, startups, and individuals to thrive.
            </p>
          </div>

          {/* Useful Links */}
          <div className="flex items-start md:justify-start   justify-center lg:justify-center ">

            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg sm:text-2xl font-dm-serif pb-2">Useful Links</p>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <ul className="flex flex-col gap-2 text-sm sm:text-base items-center md:items-start">
                  <li><Link onClick={handleScrollTop} to="/">Home</Link></li>
                  <li><Link onClick={handleScrollTop} to="/about">About Us</Link></li>
                  <li><Link onClick={handleScrollTop} to="/industries">Industries</Link></li>
                </ul>
                <ul className="flex flex-col gap-2 text-sm sm:text-base items-center md:items-start">
                  <li><Link onClick={handleScrollTop} to="/partners">Our Leadership</Link></li>
                  <li><Link onClick={handleScrollTop} to="/services">Services</Link></li>
                  <li><Link onClick={handleScrollTop} to="/contact">Contact Us</Link></li   >
                </ul>
              </div>
            </div>
          </div>

          {/* Important Links */}

          <div className="flex items-start md:justify-start   justify-center lg:justify-center ">




            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg sm:text-2xl font-dm-serif pb-2">Important Links</p>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <ul className="flex flex-col gap-2 text-sm sm:text-base items-center md:items-start">
                  <li><a href="https://www.mca.gov.in/">MCA</a></li>
                  <li><a href="https://www.sebi.gov.in/">SEBI</a></li>
                  <li><a href="https://www.rbi.org.in/">RBI</a></li>
                </ul>
                <ul className="flex flex-col gap-2 text-sm sm:text-base items-center md:items-start">
                  <li><a href="https://www.gst.gov.in/">GST</a></li>
                  <li><a href="https://www.incometax.gov.in/iec/foportal/">Income Tax</a></li>
                </ul>
              </div>
            </div>
          </div>


          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg sm:text-2xl font-dm-serif pb-2">Contact Information</p>
            <ul className="flex flex-col gap-2 text-sm sm:text-base items-center md:items-start font-light">
              <li><a href="mailto:info@kinraandassociates.com">Email : info@kinraandassociates.com</a></li>
              <li><a href="tel:+919897295511">Phone : +91 98972 95511</a></li>
            </ul>
          </div>

        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-200 py-4 px-4 sm:px-6 md:px-15 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <p className="mb-2 sm:mb-0">© 2025 Kinra & Associates. All rights reserved.</p>

        {/* Socials */}
        {/* <div className="flex items-center gap-4">
          <a href="#"><Instagram className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
          <a href="#"><Linkedin className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
          <a href="#"><Facebook className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
          <a href="#"><Twitter className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
