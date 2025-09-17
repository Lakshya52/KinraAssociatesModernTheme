import React from 'react'

const HeroNew = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center text-white"
    >
      {/* Background Image */}
      <img
        src="HeorImage2.webp"
        alt="hero section background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (optional dark filter for text readability) */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Centered Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-light leading-tight font-gwen-semibold">
          <span className="italic font-extralight">Your</span> Partner in Finance, Tax and <br />
          Business Solution
        </h1>
        <p className="mt-4 font-light text-gray-200 text-sm md:text-base">
          Integrated Professional Services For Businesses and Individuals
        </p>
      </div>
    </section>
  )
}

export default HeroNew
