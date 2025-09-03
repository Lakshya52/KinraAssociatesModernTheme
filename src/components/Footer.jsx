import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>

      <div className="w-screen flex flex-col items-center justify-center text-sm bg-[#2c2c2c]/90 text-white ">

        <footer className='w-full min-h-[300px]  flex items-center justify-center'>
          {/* content wrapper */}
          <div className='w-full max-w-[95%] px-4 sm:px-8 py-8 flex flex-col md:flex-row md:justify-between md:items-start items-center gap-0 md:gap-10 '>
            {/* content */}
            <div className='w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left'>
              <Link to="/" className='mb-5 block'>
                <p className='font-light font-playfair-display text-2xl sm:text-3xl'>Kinra & Associates </p>
                <p className='font-light font-playfair-display text-base sm:text-lg '>Chartered Accountants </p>
              </Link>
              <p className='text-xs sm:text-sm md:text-md px-2 sm:px-0 max-w-[450px] font-light text-justify'>We understand the critical role that expert Financial guidance plays in achieving success in today’s dynamic economic landscape. Our CA firm is dedicated to delivering financial and advisory services that empower businesses, startups, and individuals to thrive.
              </p>
            </div>


            {/* useful links */}
            <div className='flex items-center justify-center'>
              <div className='w-full  mb-6 md:mb-0 flex flex-col justify-center items-center md:items-start'>

                <p className='text-lg sm:text-2xl font-dm-serif pb-2 text-center md:text-left'>Useful Links</p>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 font-light pb-4 w-full justify-center md:justify-start'>
                  <ul className='flex flex-col gap-2 text-sm sm:text-base items-center sm:items-start'>
                    <li className="li-custom"><Link onClick={handleScrollTop} to="/">Home</Link></li>
                    <li className="li-custom"><Link onClick={handleScrollTop} to="/about">About Us</Link></li>
                    <li className="li-custom"><Link onClick={handleScrollTop} to="/services">Services</Link></li>
                  </ul>
                  <ul className='flex flex-col gap-2 text-sm sm:text-base items-center sm:items-start'>
                    <li className="li-custom"><Link onClick={handleScrollTop} to="/industries">Industries</Link></li>
                    <li className="li-custom"><Link onClick={handleScrollTop} to="/contact">Contact Us</Link></li>
                    <li className="li-custom"><Link onClick={handleScrollTop} to="/partners">Our Leaderships</Link></li>
                  </ul>
                </div>
              </div>
            </div>



            {/* contact info */}
            <div className='flex items-center justify-center'> 
              <div className='w-full flex items-center md:items-start justify-center md:justify-start'>
              <div className='flex flex-col items-center md:items-start w-full'>
                <div className='pb-8 sm:pb-12 w-full'>
                  <p className='text-lg sm:text-2xl font-dm-serif pb-3 text-center md:text-left'>Contact Information</p>
                  <div className='font-light'>
                    <ul className='text-sm sm:text-base flex flex-col gap-2 items-center md:items-start'>
                      <li><a href="mailto:info@kinraandassociates.com">Email : info@kinraandassociates.com</a></li>
                      <li><a href="tel:+911234567890">Phone : +91 98972 95511</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            </div>

          </div>
        </footer>



        <div className=" py-5 flex justify-between items-center w-[90%] border-t border-gray-200 " >
          {/* texts */}
          <div className="">
            © 2025 Kinra & Associates. All rights reserved.
          </div>

          {/* connect */}
          {/* <div className='flex items-center justify-center gap-5' >
            <span>Connect ---</span>
            <div className="p-2 bg-amber-800 flex items-center justify-center rounded-full hover:bg-amber-600">
              <Instagram className="text-white h-4 w-4 cursor-pointer " />
            </div>
            <div className="p-2 bg-amber-800 flex items-center justify-center rounded-full hover:bg-amber-600">
              <Linkedin className="text-white h-4 w-4 cursor-pointer " />
            </div>
            <div className="p-2 bg-amber-800 flex items-center justify-center rounded-full hover:bg-amber-600">
              <Facebook className="text-white h-4 w-4 cursor-pointer " />
            </div>
            <div className="p-2 bg-amber-800 flex items-center justify-center rounded-full hover:bg-amber-600">
              <Twitter className="text-white h-4 w-4 cursor-pointer " />
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Footer