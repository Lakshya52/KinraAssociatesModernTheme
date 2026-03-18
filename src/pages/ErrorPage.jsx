import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const ErrorPage = () => {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: '404 - Page Not Found' },
  ]

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <>
      <div className="min-h-screen w-full relative">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />

        {/* Page Heading */}
        <div className="text-center w-full pt-20 font-bold px-4" data-aos="fade-up">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-light w-full leading-snug font-gwen-semibold text-[#2b3780]">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light w-full leading-snug font-gwen-semibold mt-4">
            Page Not Found
          </h2>
          <div className="flex items-center justify-center w-full font-light mt-3">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Content Box */}
        <div className="w-full flex justify-center items-center px-4" data-aos="fade-up" data-aos-delay="300">
          <div className="w-full sm:w-[90%] md:w-[70%] flex flex-col justify-center items-center h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border border-[#2c2c2c]/50 px-4 sm:px-10 md:px-16 py-12 sm:py-16 my-6 mb-15">
            
            {/* Error Icon */}
            <div className="text-7xl mb-6">
              🔍
            </div>

            {/* Error Message */}
            <p className="text-center text-gray-600 text-lg sm:text-xl md:text-2xl mb-4 font-light">
              Oops! We couldn't find what you're looking for.
            </p>

            <p className="text-center text-gray-500 text-base sm:text-lg mb-8 max-w-2xl">
              The page you're trying to access doesn't exist or has been moved. 
              Let's get you back on track with our services.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center">
              <Link
                to="/"
                onClick={handleScrollTop}
                className="px-8 py-3 bg-[#2b3780] text-white rounded-full font-semibold hover:bg-[#ff6b6b] transition-all duration-300 text-center"
              >
                Go to Home
              </Link>

              <Link
                to="/services"
                onClick={handleScrollTop}
                className="px-8 py-3 bg-[#ff6b6b] text-white rounded-full font-semibold hover:bg-[#2b3780] transition-all duration-300 text-center"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                onClick={handleScrollTop}
                className="px-8 py-3 border-2 border-[#2b3780] text-[#2b3780] rounded-full font-semibold hover:bg-[#2b3780] hover:text-white transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-gray-300 w-full">
              {/* <p className="text-center text-gray-600 font-semibold mb-4">
                Popular Pages:
              </p> */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/about"
                  onClick={handleScrollTop}
                  className="text-[#2b3780] hover:text-[#ff6b6b] underline transition-colors"
                >
                  About Us
                </Link>
                <span className="text-gray-400">•</span>
                <Link
                  to="/services"
                  onClick={handleScrollTop}
                  className="text-[#2b3780] hover:text-[#ff6b6b] underline transition-colors"
                >
                  Services
                </Link>
                <span className="text-gray-400">•</span>
                <Link
                  to="/leaderships"
                  onClick={handleScrollTop}
                  className="text-[#2b3780] hover:text-[#ff6b6b] underline transition-colors"
                >
                  Our Team
                </Link>
                <span className="text-gray-400">•</span>
                <Link
                  to="/contact"
                  onClick={handleScrollTop}
                  className="text-[#2b3780] hover:text-[#ff6b6b] underline transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default ErrorPage
