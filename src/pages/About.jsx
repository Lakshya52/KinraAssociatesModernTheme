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

      <div className="min-h-fit w-full  relative">
        {/* Diagonal Stripes Background */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />
        {/* Your Content/Components */}
        {/* Hero Section */}
        <div className="text-center w-full   pt-10 font-bold px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light w-full leading-snug font-gwen-semibold" data-aos="fade-up">
            About Kinra <span className='font-gwynerCondensedFont' >&</span> Associates
          </h1>

          <div className="flex items-center justify-center w-full font-light mt-3" data-aos="fade-up" >
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>
        {/* Content Section */}
        <div className="w-full flex justify-center items-center  px-4" data-aos="fade-up" data-aos-delay="500">
          <div className="w-full sm:w-[90%] flex flex-col justify-between items-center h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border-[1px] border-[#2c2c2c]/50 px-4 sm:px-7 md:px-17 py-8 sm:py-12 my-6 mb-15  text-base sm:text-lg">
            {/* Objective */}
            <div className="w-full pb-5 mb-3">
              <h1 className="text-lg sm:text-2xl mb-5 ">Our Objective</h1>
              <p className="text-justify font-light ">
                We aim to provide professional services in finance, accounting, and compliance with a focus on accuracy, reliability, and adherence to applicable laws and standards. Our objective is to assist organizations in meeting their statutory and regulatory responsibilities in an efficient and professional manner.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="w-full flex flex-col md:flex-row gap-10 mb-6">

              <div className="w-full p-7 rounded-xl bg-[#2b3780] text-white" data-aos="fade-up" data-aos-delay="100">
                <h1 className="text-lg sm:text-2xl mb-5 ">Our Vision</h1>
                <p className="text-justify font-light">
                  To uphold the values of ethics, integrity, and professionalism in the practice of chartered accountancy, to promote sound financial and compliance practices across sectors, and to contribute meaningfully to the professional community, business environment, and society at large.
                </p>
              </div>
              <div className="w-full p-7 rounded-xl bg-[#2b3780] text-white" data-aos="fade-up" data-aos-delay="100">
                <h1 className="text-lg sm:text-2xl mb-5 ">Our Mission</h1>
                <p className="text-justify font-light">
                 To provide services in assurance, taxation, accounting and consultancy with integrity and independence, to ensure ethical practices in all engagements, and to foster an environment supporting professional growth and learning for associates in practice.
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

      </div>
    </>
  )
}

export default About
