import React from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Industries We Serve',  },
]


const Industries = () => {
  return (
    <>

      <div className='text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold' >
        <h1 className='text-5xl font-light w-full'><span className='italic font-extralight ' ></span> Industries We Serve</h1>

        <p className='flex items-center justify-center w-full font-light' >
          <Breadcrumb items={breadcrumbItems} />
        </p>
      </div>

      <div className="w-screen flex justify-center items-center font-playfair-display" >


        {/* content-box */}
        <div className='full sm:w-[90%] flex flex-col justify-between items-center h-fit  sm:bg-gray-100 rounded-xl sm:shadow-xl  shadow-[#5a6bdd]/10 border-[1px] border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-8 sm:py-12 my-6 sm:my-10 mb-10 text-base sm:text-lg'>
          <div className="flex flex-col md:flex-row w-full md:w-[90%] justify-between items-start gap-0 md:gap-12 ">
            <div className='w-full md:w-1/2 flex flex-col items-start justify-start mb-8 md:mb-0'>
              <ul className='flex flex-col gap-4 sm:gap-5 w-full items-start'>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.ManufacturingIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Manufacturing" /> <span className='text-lg sm:text-xl' >Manufacturing, FMCG & Industrial</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.TradingIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Trading" /> <span className='text-lg sm:text-xl' >Trading & Retail</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.RealestateIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Real Estate" /> <span className='text-lg sm:text-xl' >Real Estate & Infrastructure</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.ItIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="IT" /> <span className='text-lg sm:text-xl' >Information Technology</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.ConsultancyIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Consultancy" /> <span className='text-lg sm:text-xl' >Professional Services & Consultancy</span> </li>
              </ul>
            </div>
            <div className='w-full md:w-1/2 flex flex-col items-start justify-start'>
              <ul className='flex flex-col gap-4 sm:gap-5 w-full items-start'>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.HealthcareIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Healthcare" /> <span className='text-lg sm:text-xl' >Healthcare & Pharmaceuticals</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.LogisticsIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Logistics" /> <span className='text-lg sm:text-xl' >Logistics & Transportation</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.AgricultureIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Agriculture" /> <span className='text-lg sm:text-xl' >Agriculture & Allied Sectors</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.FinancialIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Financial" /> <span className='text-lg sm:text-xl' >Financial Sector</span> </li>
                <li className='flex items-center gap-4 sm:gap-5 justify-start'> <img src={assets.EducationIcon} className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain" alt="Education" /> <span className='text-lg sm:text-xl' >Education & Non-Profits</span> </li>
              </ul>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Industries