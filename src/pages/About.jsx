import React from 'react'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us' },
]

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light w-full leading-snug">
          About Kinra & Associates
        </h1>

        <div className="flex items-center justify-center w-full font-light mt-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex justify-center items-center font-playfair-display px-4">
        <div className="w-full sm:w-[90%] flex flex-col justify-between items-center h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border-[1px] border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-8 sm:py-12 my-6 sm:my-10 mb-10 text-base sm:text-lg">
          {/* Objective */}
          <div className="w-full pb-5 mb-3">
            <h1 className="text-lg sm:text-2xl mb-5 font-semibold">Our Objective</h1>
            <p className="text-justify">
              We are committed towards creating and sustaining long-term relationships drawn on our
              experience and expertise to help clients achieve real success. Having presence across
              Uttar Pradesh, Delhi, Madhya Pradesh, Karnataka, Maharashtra, Gujarat & Bihar, we
              provide a variety of services encompassing Finance, Accounting & Compliance Solutions
              and are committed to add value and optimize the benefits accruing to business.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="w-full flex flex-col md:flex-row gap-10 mb-6">
            <div className="w-full p-7 rounded-xl bg-amber-900 text-white">
              <h1 className="text-lg sm:text-2xl mb-5 font-semibold">Our Mission</h1>
              <p className="text-justify">
                To provide quality professional services in accounting, assurance, taxation, and
                consultancy with integrity, independence, and excellence; to create value for our
                clients through ethical and innovative solutions; and to foster a supportive
                environment that ensures professional growth, work–life balance, and well-being of
                our associates.
              </p>
            </div>

            <div className="w-full p-7 rounded-xl bg-amber-900 text-white">
              <h1 className="text-lg sm:text-2xl mb-5 font-semibold">Our Vision</h1>
              <p className="text-justify">
                To be recognized as a trusted professional services firm, consistently exceeding
                client expectations through integrity, teamwork, innovation, and specialization,
                while upholding the highest standards of ethics and professionalism.
              </p>
            </div>
          </div>

          {/* CTA + Image */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 mt-6">

            
            <div className="flex items-center justify-center gap-5">
              <h1 className="text-lg sm:text-2xl italic">Go Ahead</h1>
              <Button label="Services" href="/services" />
            </div>
            
            <div className="w-full md:w-auto flex justify-center">
              <img src="AboutImage.svg" className="w-48 sm:w-64 md:w-72 lg:w-80" alt="About" />
            </div>

          </div> */}
        </div>
      </div>
    </>
  )
}

export default About
