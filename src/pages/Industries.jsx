import React from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Industries We Serve' },
]

const Industries = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center w-full font-gwynerCondensedFont  mt-10 font-bold px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light w-full leading-snug">
          Industries We Serve
        </h1>

        <div className="flex items-center justify-center w-full font-light mt-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex justify-center items-center font-playfair-display px-4">
        <div className="w-full sm:w-[90%] flex flex-col h-fit sm:bg-gray-100 rounded-xl sm:shadow-xl shadow-[#5a6bdd]/10 border border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-8 sm:py-12 my-6 mb-15 text-base sm:text-lg">


          <div className="flex flex-col md:flex-row w-full md:w-[90%] justify-between items-start gap-6 md:gap-12">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-6">
              <ul className="flex flex-col gap-4 sm:gap-5 w-full items-start">
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.ManufacturingIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Manufacturing"
                  />
                  <span className="text-base sm:text-lg md:text-xl">
                    Manufacturing, FMCG & Industrial
                  </span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.TradingIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Trading"
                  />
                  <span className="text-base sm:text-lg md:text-xl">Trading & Retail</span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.RealestateIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Real Estate"
                  />
                  <span className="text-base sm:text-lg md:text-xl">
                    Real Estate & Infrastructure
                  </span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.ItIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="IT"
                  />
                  <span className="text-base sm:text-lg md:text-xl">Information Technology</span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.ConsultancyIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Consultancy"
                  />
                  <span className="text-base sm:text-lg md:text-xl">
                    Professional Services & Consultancy
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-6">
              <ul className="flex flex-col gap-4 sm:gap-5 w-full items-start">
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.HealthcareIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Healthcare"
                  />
                  <span className="text-base sm:text-lg md:text-xl">
                    Healthcare & Pharmaceuticals
                  </span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.LogisticsIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Logistics"
                  />
                  <span className="text-base sm:text-lg md:text-xl">
                    Logistics & Transportation
                  </span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.AgricultureIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Agriculture"
                  />
                  <span className="text-base sm:text-lg md:text-xl">
                    Agriculture & Allied Sectors
                  </span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.FinancialIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Financial"
                  />
                  <span className="text-base sm:text-lg md:text-xl">Financial Sector</span>
                </li>
                <li className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={assets.EducationIcon}
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                    alt="Education"
                  />
                  <span className="text-base sm:text-lg md:text-xl">
                    Education & Non-Profits
                  </span>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Industries
