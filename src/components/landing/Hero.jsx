import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';

const Hero = () => {


    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <>

            <div className='text-center w-full font-gwynerCondensedFont py-10 mt-10 font-bold' >
                <h1 className='text-5xl font-light w-full'><span className='italic font-extralight ' >Your</span> Partner in Finance, Tax and <br /> Business Solution</h1>

                <p className='mt-2 font-light text-gray-700 w-full' >Integrated Professional Services For Businesses and Individuals</p>
            </div>

            <div className='w-full inline-block '  >

                <div className="h-[200px] w-full overflow-hidden">

                    <img src="HeorImage2.jpg" className='object-cover overflow-hidden absolute h-full place-content-center w-full  ' alt="hero section image for kinra and associates" />
                </div>


                <Link to='/contact' className='absolute top-75 left-1/7 -translate-x-1/2  '>

                    <img src="CTAButton.png" className='animate-spin-slow  ' />


                </Link>


            </div>
            <div className='w-full flex justify-between absolute top-[150%] items-center px-15 bg-[#2c2c2c]/90 text-white text-sm py-5 '>
                <Link onClick={handleScrollTop} to="/accounting">
                    <span>Accounting & Financials</span>
                </Link>
                <Link onClick={handleScrollTop} to="/audit_and_assurance">
                    <span>Audit And Assurance</span>
                </Link>
                <Link onClick={handleScrollTop} to="/business_advisory">
                    <span>Business Advisory</span>
                </Link>
                <Link onClick={handleScrollTop} to="/compliance_support">
                    <span>Compliace Support</span>
                </Link>
                <Link onClick={handleScrollTop} to="/direct_indirect_tax">
                    <span>Direct And Indirect Tax Advisory</span>
                </Link>
                <Link onClick={handleScrollTop} to="/specialized_services">
                    <span>Specialized Services</span>
                </Link>
            </div>



        </>
    )
}

export default Hero