import React from 'react'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'


const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', },
]


const About = () => {
  return (
    <>
      <div className='text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold' >
        <h1 className='text-5xl font-light w-full'><span className='italic font-extralight ' ></span> About Kinra And Associates</h1>

        <p className='flex items-center justify-center w-full font-light' >


          <Breadcrumb items={breadcrumbItems} />
        </p>
      </div>

      {/* content-box */}
      <div className="w-screen flex justify-center items-center font-playfair-display" >


        <div className="w-full sm:w-[90%] flex flex-col justify-between items-center h-fit  sm:bg-gray-100 rounded-xl sm:shadow-xl  shadow-[#5a6bdd]/10 border-[1px] border-[#2c2c2c]/50 px-4 sm:px-10 md:px-20 py-8 sm:py-12 my-6 sm:my-10 mb-10 text-base sm:text-lg">
          <div className="w-full pb-5 mb-3">
            <h1 className="text-xl sm:text-2xl mb-5">Our Objective</h1>
            <p className="text-justify">
              We are committed towards creating and sustaining long-term relationships drawn on our experience and expertise to help clients achieve real success. Having presence across Uttar Pradesh, Delhi, Madhya Pradesh, Karnataka, Maharashtra, Gujarat & Bihar, we provide a variety of services encompassing Finance, Accounting & Compliance Solutions and are committed to add value and optimize the benefits accruing to business.
            </p>
          </div>


          <div className="w-full flex gap-15">
            <div className="w-full pb-5 mb-3">
              <h1 className="text-xl sm:text-2xl mb-5">Our Mission</h1>
              <p className="text-justify">
                To provide quality professional services in accounting, assurance, taxation, and consultancy with integrity, independence, and excellence; to create value for our clients through ethical and innovative solutions; and to foster a supportive environment that ensures professional growth, work–life balance, and well-being of our associates.
              </p>
            </div>

            <div className="w-full pb-5 mb-3">
              <h1 className="text-xl sm:text-2xl mb-5">Our Vision</h1>
              <p className="text-justify">
                To be recognized as a trusted professional services firm, consistently exceeding client expectations through integrity, teamwork, innovation, and specialization, while upholding the highest standards of ethics and professionalism.
              </p>
            </div>
          </div>




          <br />
          {/* <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <div className="w-full md:w-1/2 p-4 sm:p-5 h-auto md:h-[280px] bg-[#303b82] text-white rounded-xl mb-5 md:mb-0">
              <h1 className="font-bold mb-5 text-lg sm:text-xl flex items-center gap-3 w-full text-center justify-center"><img src="" className="h-7 w-7 text-white" alt="Vision" />Our Vision</h1>
              <p className="text-justify">
                To be recognized as a trusted professional services firm, consistently exceeding client expectations through integrity, teamwork, innovation, and specialization, while upholding the highest standards of ethics and professionalism.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4 sm:p-5 h-auto md:h-[280px] bg-[#303b82] text-white rounded-xl">
              <h1 className="font-bold mb-5 text-lg sm:text-xl flex items-center gap-3 w-full text-center justify-center"><img src="" className="h-7 w-7 text-white" alt="Mission" />Our Mission</h1>
              <p className="text-justify">
                To provide quality professional services in accounting, assurance, taxation, and consultancy with integrity, independence, and excellence; to create value for our clients through ethical and innovative solutions; and to foster a supportive environment that ensures professional growth, work–life balance, and well-being of our associates.
              </p>
            </div>
          </div> */}

          <div className='flex justify-between items-center w-full  '>

            <div className='flex items-center justify-center gap-5'>
              <h1 className="text-xl sm:text-2xl italic">
                Go Ahead
              </h1>
              <Button label='Services' href='/services' />
              <br />

            </div>


            <div>
              <img src="AboutImage.svg" className="w-70" />
            </div>

          </div>
        </div>
      </div>

    </>

  )
}

export default About