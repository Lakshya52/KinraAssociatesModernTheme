import React from 'react'
import Button from '../ui/Button'

const Intro = () => {
  return (
    <>


      {/* <div className="min-h-screen w-full relative">
        Radial Gradient Background
        <div
          className="absolute inset-0 z-[-10]"
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
          }}
        />
        Your Content/Components
        
      </div> */}


      {/* wrapper */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-15  mt-20  h-auto lg:h-[500px] gap-10" >

          {/* left */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full pr-0 lg:pr-10 flex items-center lg:items-start justify-center flex-col text-center lg:text-left"  data-aos="fade-right" >
            {/* <p className="text-sm md:text-base text-gray-600">--- About Us</p> */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light w-full mt-3 md:mt-5 leading-snug font-gwen-semibold">
              Supporting Businesses and Individuals with Professional Services
            </h1>
            {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-light w-full mt-3 md:mt-5 leading-snug">
              Empowering Business And Individuals
            </h1> */}
            <p className="mt-5 md:mt-7 mb-5 md:mb-7 text-sm md:text-base text-gray-700">
              We offer taxation, audit, financial, and accounting services, along with compliance support, assisting organizations and individuals in meeting statutory and regulatory obligations.
            </p>
            <Button label="About Us" href="/about" b_radius="rounded-full" border={false} hov_bg="[#2b3780]" hov_text="white" />
          </div>

          {/* right images */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-row lg:flex-row items-center justify-center gap-4 lg:gap-7" >
            <img
              src="IntroNew1.webp"
              className="w-1/2 object-cover overflow-hidden bg-gray-300 h-[200px] md:h-[300px] lg:h-[90%] mb-5 lg:mb-20 rounded-xl"
              alt="Intro visual 1"
            />
            <img
              src="IntroNew2.webp"
              className="w-1/2 object-cover overflow-hidden bg-gray-300 h-[200px] md:h-[300px] lg:h-[90%] mt-5 lg:mt-10 rounded-xl"
              alt="Intro visual 2"
            />
          </div>
        </div>


    </>
  )
}

export default Intro
