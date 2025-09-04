import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Heading + Subtitle */}
      <div className="text-center w-full font-gwynerCondensedFont py-10 mt-0 md:mt-10 font-bold">
        <h1 className="text-3xl md:text-5xl font-light w-full leading-tight">
          <span className="italic font-extralight">Your</span> Partner in Finance, Tax and <br /> Business Solution
        </h1>
        <p className="mt-2 font-light text-gray-700 w-full text-sm md:text-base">
          Integrated Professional Services For Businesses and Individuals
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="h-[250px] md:h-[400px] w-full relative">
          <img
            src="HeorImage2.webp"
            className="object-cover w-full h-full"
            alt="hero section image for kinra & associates"
          />

          {/* CTA Button */}
          <Link
          onClick={handleScrollTop}
            to="/contact"
            className="absolute left-1/6 top-0 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="CTAButton.png"
              className="animate-spin-slow w-16 md:w-24"
              alt="CTA Button"
            />
          </Link>

          {/* Scrolling Links */}
          {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#2c2c2c]/90 text-white py-3">
            <div className="flex whitespace-nowrap animate-marquee">
              {[
                { to: "/accounting", label: "Accounting & Financials" },
                { to: "/audit_and_assurance", label: "Audit And Assurance" },
                { to: "/business_advisory", label: "Business Advisory" },
                { to: "/compliance_support", label: "Compliance Support" },
                { to: "/direct_indirect_tax", label: "Direct & Indirect Tax Advisory" },
                { to: "/specialized_services", label: "Specialized Services" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  onClick={handleScrollTop}
                  to={item.to}
                  className="px-6 text-xs md:text-sm hover:underline"
                >
                  {item.label}
                </Link>
              ))}

               Duplicate list for seamless loop 
              {[
                { to: "/accounting", label: "Accounting & Financials" },
                { to: "/audit_and_assurance", label: "Audit And Assurance" },
                { to: "/business_advisory", label: "Business Advisory" },
                { to: "/compliance_support", label: "Compliance Support" },
                { to: "/direct_indirect_tax", label: "Direct & Indirect Tax Advisory" },
                { to: "/specialized_services", label: "Specialized Services" },
              ].map((item, idx) => (
                <Link
                  key={`dup-${idx}`}
                  onClick={handleScrollTop}
                  to={item.to}
                  className="px-6 text-xs md:text-sm hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Hero
